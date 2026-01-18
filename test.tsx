<?php

// ========== MODEL ==========
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

if (!class_exists('App\Models\Article')) {
    class Article extends Model
    {
        use HasFactory;

        protected $fillable = [
            'title',
            'content',
            'author',
            'category',
            'published_at'
        ];

        protected $casts = [
            'published_at' => 'date'
        ];

        protected $hidden = [
            'created_at',
            'updated_at'
        ];
    }
}

// ========== BASE CONTROLLER ==========
namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

if (!class_exists('App\Http\Controllers\Controller')) {
    class Controller extends BaseController
    {
        // base controller
    }
}

// ========== ARTICLE CONTROLLER ==========
namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

if (!class_exists('App\Http\Controllers\ArticleController')) {
    class ArticleController extends Controller
    {
        // GET /articles - Get all articles
        public function index()
        {
            $articles = Article::orderBy('id')->get();
            return $articles;
        }

        // POST /articles - Create new article
        public function store(Request $request)
        {
            return $this->create($request);
        }

        // POST /articles - Create new article (alias for tests)
        public function create(Request $request)
        {
            // Enhanced validation to handle null values properly
            $data = $request->all();
            
            // Check for null or empty required fields explicitly
            $requiredFields = ['title', 'content', 'author', 'category', 'published_at'];
            foreach ($requiredFields as $field) {
                if (!isset($data[$field]) || $data[$field] === null || $data[$field] === '') {
                    return response()->json([
                        'errMsg' => 'MandatoryFieldsNotComplete',
                        'errors' => [$field => ["The {$field} field is required."]]
                    ], 400);
                }
            }
            
            // Validate title length
            if (isset($data['title']) && strlen($data['title']) > 30) {
                return response()->json([
                    'errMsg' => 'MandatoryFieldsNotComplete',
                    'errors' => ['title' => ['The title may not be greater than 30 characters.']]
                ], 400);
            }
            
            $rules = [
                'title' => 'required|string|max:30',
                'content' => 'required|string',
                'author' => 'required|string',
                'category' => 'required|string',
                'published_at' => 'required|date'
            ];

            $validator = \Illuminate\Support\Facades\Validator::make($data, $rules);

            if ($validator->fails()) {
                return response()->json([
                    'errMsg' => 'MandatoryFieldsNotComplete',
                    'errors' => $validator->errors()
                ], 400);
            }

            $article = Article::create($validator->validated());
            return $article;
        }

        // GET /articles/{id} - Get specific article
        public function show($id)
        {
            // Validate ID format - should be numeric
            if (!is_numeric($id) || $id <= 0) {
                return response()->json(['errMsg' => 'ArticleDoesnotExists'], 404);
            }
            
            $article = Article::find($id);

            if (!$article) {
                return response()->json(['errMsg' => 'ArticleDoesnotExists'], 404);
            }

            return $article;
        }

        // PUT /articles/{id} - Update specific article
        public function update(Request $request, $id)
        {
            // Validate ID format - should be numeric
            if (!is_numeric($id) || $id <= 0) {
                return response()->json(['errMsg' => 'ArticleDoesnotExists'], 404);
            }
            
            $article = Article::find($id);

            if (!$article) {
                return response()->json(['errMsg' => 'ArticleDoesnotExists'], 404);
            }

            $data = $request->all();
            
            // Check for null values in provided fields
            $updateableFields = ['title', 'content', 'author', 'category', 'published_at'];
            foreach ($updateableFields as $field) {
                if (isset($data[$field]) && ($data[$field] === null || $data[$field] === '')) {
                    return response()->json([
                        'errMsg' => 'MandatoryFieldsNotComplete',
                        'errors' => [$field => ["The {$field} field cannot be empty."]]
                    ], 400);
                }
            }

            // Validate title length if provided
            if (isset($data['title']) && strlen($data['title']) > 30) {
                return response()->json([
                    'errMsg' => 'MandatoryFieldsNotComplete',
                    'errors' => ['title' => ['The title may not be greater than 30 characters.']]
                ], 400);
            }

            // Manual validation for update
            $rules = [
                'title' => 'sometimes|required|string|max:30',
                'content' => 'sometimes|required|string',
                'author' => 'sometimes|required|string',
                'category' => 'sometimes|required|string',
                'published_at' => 'sometimes|required|date'
            ];

            $validator = \Illuminate\Support\Facades\Validator::make($data, $rules);

            if ($validator->fails()) {
                return response()->json([
                    'errMsg' => 'MandatoryFieldsNotComplete',
                    'errors' => $validator->errors()
                ], 400);
            }

            $article->update($validator->validated());
            return $article->fresh();
        }

        // DELETE /articles/{id} - Delete specific article
        public function destroy($id)
        {
            // Validate ID format - should be numeric
            if (!is_numeric($id) || $id <= 0) {
                return response()->json(['errMsg' => 'ArticleDoesnotExists'], 404);
            }
            
            $article = Article::find($id);

            if (!$article) {
                return response()->json(['errMsg' => 'ArticleDoesnotExists'], 404);
            }

            $article->delete();
            return ['message' => 'Article deleted successfully'];
        }
    }
}

// ========== CUSTOM MIGRATION ==========
namespace App\SingleFileSetup\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

if (!class_exists('App\SingleFileSetup\Migrations\CreateArticlesTableCustom')) {
    class CreateArticlesTableCustom extends Migration
    {
        public function up()
        {
            Schema::create('articles', function (Blueprint $table) {
                $table->id();
                $table->string('title', 30);
                $table->text('content');
                $table->string('author');
                $table->string('category');
                $table->date('published_at');
                $table->timestamps();
            });
        }

        public function down()
        {
            Schema::dropIfExists('articles');
        }
    }
}

// ========== FACTORY ==========
namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

if (!class_exists('Database\Factories\ArticleFactory')) {
    class ArticleFactory extends Factory
    {
        protected $model = Article::class;

        public function definition()
        {
            return [
                'title' => substr($this->faker->sentence(3), 0, 30), // Ensure max 30 chars
                'content' => $this->faker->paragraph(3),
                'author' => $this->faker->name(),
                'category' => $this->faker->randomElement(['Tech', 'Nature', 'Politics']),
                'published_at' => $this->faker->date()
            ];
        }
    }
}

// ========== SEEDER ==========
namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

if (!class_exists('Database\Seeders\ArticleSeeder')) {
    class ArticleSeeder extends Seeder
    {
        public function run()
        {
            Article::create([
                'title' => 'New Article',
                'content' => 'Sample article content',
                'author' => 'John Doe',
                'category' => 'Tech',
                'published_at' => now()
            ]);

            Article::factory(5)->create();
        }
    }
}

// ========== ROUTES ==========
namespace App\SingleFileSetup\Routes;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

// Define API routes for articles
Route::prefix('api')->group(function () {
    Route::get('articles', [ArticleController::class, 'index']);
    Route::post('articles', [ArticleController::class, 'store']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::patch('articles/{id}', [ArticleController::class, 'update']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);
});

// Also keep the resource route as backup
Route::apiResource('articles', ArticleController::class);