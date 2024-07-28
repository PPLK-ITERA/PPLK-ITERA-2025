   <?php

   use App\Http\Controllers\User\RelasiController;
   use Illuminate\Support\Facades\Route;

   Route::middleware('auth')->group(function () {
      Route::prefix('relasi')->group(function () {
         //Followers
         //top 3 followers
         Route::get('/top-followers', [RelasiController::class, 'topFollowers']);
         //search maba
         Route::post('/search', [RelasiController::class, 'search']);
         //seluruh list maba
         Route::get('/list-maba', [RelasiController::class, 'listMaba']);

         Route::middleware(['checkRole:maba'])->group(function () {
            //follow button
            Route::post('/follow/{id}', [RelasiController::class, 'follow'])->name('follow');
         });
      });
   });
