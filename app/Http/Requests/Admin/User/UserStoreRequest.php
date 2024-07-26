<?php

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserStoreRequest extends FormRequest
{
   /**
    * Determine if the user is authorized to make this request.
    */
   public function authorize(): bool
   {
      return false;
   }

   /**
    * Get the validation rules that apply to the request.
    *
    * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
    */
   public function rules(): array
   {
      return [
         'name' => ['required', 'string', 'max:255'],
         'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique('users')],
         'password' => ['required', 'string', 'min:8'],
         'nim' => ['string'],
         'prodi' => ['string'],
         'bio' => ['string'],
         'view_count' => ['integer', 'default:0'],
         'linkedin_url' => ['string'],
         'instagram_url' => ['string'],
         'pita' => ['integer'],
         'ket_penyakit' => ['string'],
         'kelompok_id' => ['integer'],
         'link_sertif' => ['string', 'url'],
         'role_id' => ['required', 'integer'],
      ];
   }
}
