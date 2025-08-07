<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDokumentasiRequest extends FormRequest
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
            // Hari ke tidak bisa diubah setelah dibuat, jadi kita skip validasi unique
            'hari_ke' => 'required|integer|min:1|max:5',
            'judul' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'link_gdrive' => 'nullable|url',
            'fotos' => 'nullable|array|max:15', // Maksimal 15 foto
            'fotos.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Max 2MB per foto
            'hapus_foto' => 'nullable|array', // Array ID foto yang akan dihapus
            'hapus_foto.*' => 'nullable|integer|exists:foto_dokumentasi,id',
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
            'judul.max' => 'Judul maksimal 255 karakter.',
            'link_gdrive.url' => 'Link Google Drive harus berupa URL yang valid.',
            'fotos.max' => 'Maksimal 15 foto yang dapat diunggah.',
            'fotos.*.image' => 'File harus berupa gambar.',
            'fotos.*.mimes' => 'Foto harus berformat jpeg, png, jpg, atau gif.',
            'fotos.*.max' => 'Ukuran foto maksimal 2MB.',
            'hapus_foto.*.exists' => 'Foto yang akan dihapus tidak ditemukan.',
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
            // Hitung total foto setelah penambahan dan penghapusan
            $dokumentasi = $this->route('dokumentasi');
            $fotoSaatIni = $dokumentasi->fotos()->count();
            $fotoAkanDihapus = $this->input('hapus_foto') ? count($this->input('hapus_foto')) : 0;
            $fotoBaru = $this->hasFile('fotos') ? count($this->file('fotos')) : 0;
            
            $totalFotoSetelahUpdate = $fotoSaatIni - $fotoAkanDihapus + $fotoBaru;
            
            if ($totalFotoSetelahUpdate > 15) {
                $validator->errors()->add('fotos', 'Total foto tidak boleh lebih dari 15. Saat ini akan ada ' . $totalFotoSetelahUpdate . ' foto.');
            }
        });
    }
}