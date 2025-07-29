@extends('layouts.app')

@section('title', 'Tambah Dokumentasi Kegiatan')

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h4><i class="fas fa-plus"></i> Tambah Dokumentasi Kegiatan</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('dashboard.dokumentasi.store') }}" 
                      method="POST" 
                      enctype="multipart/form-data">
                    @csrf
                    
                    <!-- Pilih Hari -->
                    <div class="mb-3">
                        <label for="hari_ke" class="form-label">
                            Hari Ke <span class="text-danger">*</span>
                        </label>
                        <div class="row">
                            @for($i = 1; $i <= 5; $i++)
                                <div class="col-md-2 col-4 mb-2">
                                    <div class="form-check">
                                        <input class="form-check-input" 
                                               type="radio" 
                                               name="hari_ke" 
                                               id="hari_{{ $i }}" 
                                               value="{{ $i }}"
                                               {{ old('hari_ke') == $i ? 'checked' : '' }}
                                               {{ in_array($i, $hariTerpakai) ? 'disabled' : '' }}>
                                        <label class="form-check-label" for="hari_{{ $i }}">
                                            Hari {{ $i }}
                                            @if(in_array($i, $hariTerpakai))
                                                <small class="text-muted">(Sudah Ada)</small>
                                            @endif
                                        </label>
                                    </div>
                                </div>
                            @endfor
                        </div>
                        @error('hari_ke')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Judul -->
                    <div class="mb-3">
                        <label for="judul" class="form-label">Judul (Opsional)</label>
                        <input type="text" 
                               class="form-control @error('judul') is-invalid @enderror" 
                               id="judul" 
                               name="judul" 
                               value="{{ old('judul') }}"
                               placeholder="Masukkan judul dokumentasi">
                        @error('judul')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Deskripsi -->
                    <div class="mb-3">
                        <label for="deskripsi" class="form-label">Deskripsi (Opsional)</label>
                        <textarea class="form-control @error('deskripsi') is-invalid @enderror" 
                                  id="deskripsi" 
                                  name="deskripsi" 
                                  rows="4"
                                  placeholder="Deskripsikan kegiatan pada hari ini">{{ old('deskripsi') }}</textarea>
                        @error('deskripsi')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Link Google Drive -->
                    <div class="mb-3">
                        <label for="link_gdrive" class="form-label">
                            <i class="fab fa-google-drive"></i> Link Google Drive (Opsional)
                        </label>
                        <input type="url" 
                               class="form-control @error('link_gdrive') is-invalid @enderror" 
                               id="link_gdrive" 
                               name="link_gdrive" 
                               value="{{ old('link_gdrive') }}"
                               placeholder="https://drive.google.com/...">
                        @error('link_gdrive')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Upload Foto -->
                    <div class="mb-3">
                        <label for="fotos" class="form-label">
                            <i class="fas fa-images"></i> Upload Foto (Maksimal 15)
                        </label>
                        <input type="file" 
                               class="form-control @error('fotos') is-invalid @enderror @error('fotos.*') is-invalid @enderror" 
                               id="fotos" 
                               name="fotos[]" 
                               multiple 
                               accept="image/*">
                        <div class="form-text">
                            Format yang diizinkan: JPG, JPEG, PNG, GIF. Maksimal 2MB per foto.
                        </div>
                        @error('fotos')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                        @error('fotos.*')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Preview Foto -->
                    <div id="foto-preview" class="mb-3" style="display: none;">
                        <label class="form-label">Preview Foto:</label>
                        <div id="preview-container" class="d-flex flex-wrap gap-2"></div>
                    </div>

                    <!-- Buttons -->
                    <div class="d-flex justify-content-between">
                        <a href="{{ route('dashboard.dokumentasi.index') }}" class="btn btn-secondary">
                            <i class="fas fa-arrow-left"></i> Kembali
                        </a>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> Simpan Dokumentasi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
$(document).ready(function() {
    // Preview foto sebelum upload
    $('#fotos').on('change', function() {
        const files = this.files;
        const previewContainer = $('#preview-container');
        const fotoPreview = $('#foto-preview');
        
        previewContainer.empty();
        
        if (files.length > 0) {
            if (files.length > 15) {
                alert('Maksimal 15 foto yang dapat diunggah!');
                this.value = '';
                fotoPreview.hide();
                return;
            }
            
            fotoPreview.show();
            
            Array.from(files).forEach((file, index) => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const preview = $(`
                            <div class="foto-preview">
                                <img src="${e.target.result}" 
                                     class="foto-thumbnail" 
                                     alt="Preview ${index + 1}">
                                <div class="small text-center mt-1">${file.name}</div>
                            </div>
                        `);
                        previewContainer.append(preview);
                    };
                    reader.readAsDataURL(file);
                }
            });
        } else {
            fotoPreview.hide();
        }
    });
});
</script>
@endpush