<?php

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
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
         'name' => ['sometimes', 'string', 'max:255'],
         'email' => [
            'sometimes', 'string', 'email', 'max:255',
            Rule::unique('users')->ignore($this->user),
         ],
         'password' => ['sometimes', 'string', 'min:8'],
         'nim' => ['sometimes', 'string'],
         'prodi' => ['sometimes', 'string'],
         'bio' => ['sometimes', 'string'],
         'view_count' => ['sometimes', 'integer'],
         'linkedin_url' => ['sometimes', 'string', 'url'],
         'instagram_url' => ['sometimes', 'string', 'url'],
         'pita' => ['sometimes', 'integer'],
         'ket_penyakit' => ['sometimes', 'string'],
         'kelompok_id' => ['sometimes', 'integer'],
         'link_sertif' => ['sometimes', 'string', 'url'],
         'role_id' => ['sometimes', 'integer'],
      ];
   }
}
