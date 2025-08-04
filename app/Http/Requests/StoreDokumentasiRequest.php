<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDokumentasiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Sesuaikan dengan kebutuhan authorization
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'hari_ke' => 'required|integer|min:1|max:5|unique:dokumentasi,hari_ke',
            'judul' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'link_gdrive' => 'nullable|url',
            'fotos' => 'nullable|array|max:15', // Maksimal 15 foto
            'fotos.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Max 2MB per foto
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'hari_ke.required' => 'Hari ke harus dipilih.',
            'hari_ke.integer' => 'Hari ke harus berupa angka.',
            'hari_ke.min' => 'Hari ke minimal 1.',
            'hari_ke.max' => 'Hari ke maksimal 5.',
            'hari_ke.unique' => 'Dokumentasi untuk hari ke-:input sudah ada.',
            'judul.max' => 'Judul maksimal 255 karakter.',
            'link_gdrive.url' => 'Link Google Drive harus berupa URL yang valid.',
            'fotos.max' => 'Maksimal 15 foto yang dapat diunggah.',
            'fotos.*.image' => 'File harus berupa gambar.',
            'fotos.*.mimes' => 'Foto harus berformat jpeg, png, jpg, atau gif.',
            'fotos.*.max' => 'Ukuran foto maksimal 2MB.',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'hari_ke' => 'hari ke',
            'judul' => 'judul',
            'deskripsi' => 'deskripsi',
            'link_gdrive' => 'link Google Drive',
            'fotos' => 'foto',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            // Validasi tambahan: cek jumlah foto tidak lebih dari 15
            if ($this->hasFile('fotos') && count($this->file('fotos')) > 15) {
                $validator->errors()->add('fotos', 'Maksimal 15 foto yang dapat diunggah.');
            }
        });
    }
}