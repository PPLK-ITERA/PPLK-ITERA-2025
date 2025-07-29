@extends('layouts.app')

@section('title', 'Edit Dokumentasi Hari Ke-' . $dokumentasi->hari_ke)

@section('content')
<div class="row justify-content-center">
    <div class="col-md-10">
        <div class="card">
            <div class="card-header">
                <h4><i class="fas fa-edit"></i> Edit Dokumentasi Hari Ke-{{ $dokumentasi->hari_ke }}</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('dashboard.dokumentasi.update', $dokumentasi) }}" 
                      method="POST" 
                      enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    
                    <!-- Hari Ke (Read Only) -->
                    <div class="mb-3">
                        <label class="form-label">Hari Ke</label>
                        <input type="text" 
                               class="form-control" 
                               value="Hari {{ $dokumentasi->hari_ke }}" 
                               readonly>
                        <div class="form-text">Hari tidak dapat diubah setelah dibuat</div>
                        <input type="hidden" name="hari_ke" value="{{ $dokumentasi->hari_ke }}">
                    </div>

                    <!-- Judul -->
                    <div class="mb-3">
                        <label for="judul" class="form-label">Judul (Opsional)</label>
                        <input type="text" 
                               class="form-control @error('judul') is-invalid @enderror" 
                               id="judul" 
                               name="judul" 
                               value="{{ old('judul', $dokumentasi->judul) }}"
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
                                  placeholder="Deskripsikan kegiatan pada hari ini">{{ old('deskripsi', $dokumentasi->deskripsi) }}</textarea>
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
                               value="{{ old('link_gdrive', $dokumentasi->link_gdrive) }}"
                               placeholder="https://drive.google.com/...">
                        @error('link_gdrive')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Foto Yang Sudah Ada -->
                    @if($dokumentasi->fotos->count() > 0)
                        <div class="mb-4">
                            <label class="form-label">
                                <i class="fas fa-images"></i> Foto Yang Sudah Ada ({{ $dokumentasi->fotos->count() }})
                            </label>
                            <div class="form-text mb-3">Centang foto yang ingin dihapus</div>
                            
                            <div class="row">
                                @foreach($dokumentasi->fotos as $foto)
                                    <div class="col-md-3 col-sm-4 col-6 mb-3">
                                        <div class="card">
                                            <div class="position-relative">
                                                <img src="{{ $foto->url }}" 
                                                     class="card-img-top" 
                                                     alt="{{ $foto->nama_file }}"
                                                     style="height: 150px; object-fit: cover;">
                                                
                                                <!-- Checkbox untuk hapus -->
                                                <div class="position-absolute top-0 end-0 m-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input bg-danger border-danger" 
                                                               type="checkbox" 
                                                               name="hapus_foto[]" 
                                                               value="{{ $foto->id }}" 
                                                               id="hapus_{{ $foto->id }}">
                                                        <label class="form-check-label text-white" 
                                                               for="hapus_{{ $foto->id }}"
                                                               title="Hapus foto ini">
                                                            <i class="fas fa-trash"></i>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card-body p-2">
                                                <small class="text-muted">{{ Str::limit($foto->nama_file, 20) }}</small>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endif

                    <!-- Upload Foto Baru -->
                    <div class="mb-3">
                        <label for="fotos" class="form-label">
                            <i class="fas fa-plus"></i> Tambah Foto Baru
                        </label>
                        <input type="file" 
                               class="form-control @error('fotos') is-invalid @enderror @error('fotos.*') is-invalid @enderror" 
                               id="fotos" 
                               name="fotos[]" 
                               multiple 
                               accept="image/*">
                        <div class="form-text">
                            Format yang diizinkan: JPG, JPEG, PNG, GIF. Maksimal 2MB per foto.<br>
                            <strong>Total foto setelah penambahan tidak boleh lebih dari 15.</strong>
                        </div>
                        @error('fotos')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                        @error('fotos.*')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Preview Foto Baru -->
                    <div id="foto-preview" class="mb-3" style="display: none;">
                        <label class="form-label">Preview Foto Baru:</label>
                        <div id="preview-container" class="d-flex flex-wrap gap-2"></div>
                    </div>

                    <!-- Info Total Foto -->
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle"></i>
                        <strong>Info:</strong> Saat ini ada <span id="foto-saat-ini">{{ $dokumentasi->fotos->count() }}</span> foto. 
                        Maksimal 15 foto diizinkan.
                    </div>

                    <!-- Buttons -->
                    <div class="d-flex justify-content-between">
                        <a href="{{ route('dashboard.dokumentasi.show', $dokumentasi) }}" class="btn btn-secondary">
                            <i class="fas fa-arrow-left"></i> Kembali
                        </a>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> Update Dokumentasi
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
    let fotoSaatIni = {{ $dokumentasi->fotos->count() }};
    
    // Update counter foto saat ini
    function updateFotoCounter() {
        const fotoAkanDihapus = $('input[name="hapus_foto[]"]:checked').length;
        const fotoBaru = $('#fotos')[0].files.length;
        const totalFoto = fotoSaatIni - fotoAkanDihapus + fotoBaru;
        
        $('#foto-saat-ini').text(totalFoto);
        
        // Warning jika melebihi batas
        const alertInfo = $('.alert-info');
        if (totalFoto > 15) {
            alertInfo.removeClass('alert-info').addClass('alert-warning');
            alertInfo.find('strong').text('Peringatan:');
            alertInfo.find('span').after(' <strong class="text-danger">(Melebihi batas maksimal!)</strong>');
        } else {
            alertInfo.removeClass('alert-warning').addClass('alert-info');
            alertInfo.find('strong').text('Info:');
            alertInfo.find('.text-danger').remove();
        }
    }
    
    // Event listener untuk checkbox hapus foto
    $('input[name="hapus_foto[]"]').on('change', updateFotoCounter);
    
    // Preview foto baru
    $('#fotos').on('change', function() {
        const files = this.files;
        const previewContainer = $('#preview-container');
        const fotoPreview = $('#foto-preview');
        
        previewContainer.empty();
        updateFotoCounter();
        
        if (files.length > 0) {
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
    
    // Style untuk checkbox yang dipilih
    $('input[name="hapus_foto[]"]').on('change', function() {
        const card = $(this).closest('.card');
        if ($(this).is(':checked')) {
            card.addClass('border-danger').css('opacity', '0.6');
        } else {
            card.removeClass('border-danger').css('opacity', '1');
        }
    });
});
</script>
@endpush