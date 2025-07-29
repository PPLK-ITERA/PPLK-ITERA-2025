@extends('layouts.app')

@section('title', 'Detail Dokumentasi Hari Ke-' . $dokumentasi->hari_ke)

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h4><i class="fas fa-calendar-day"></i> Hari Ke-{{ $dokumentasi->hari_ke }}</h4>
            </div>
            <div class="card-body">
                <!-- Judul -->
                @if($dokumentasi->judul)
                    <h5 class="mb-3">{{ $dokumentasi->judul }}</h5>
                @endif

                <!-- Deskripsi -->
                @if($dokumentasi->deskripsi)
                    <div class="mb-4">
                        <h6><i class="fas fa-align-left"></i> Deskripsi:</h6>
                        <p class="text-muted">{{ $dokumentasi->deskripsi }}</p>
                    </div>
                @endif

                <!-- Link Google Drive -->
                @if($dokumentasi->link_gdrive)
                    <div class="mb-4">
                        <h6><i class="fab fa-google-drive"></i> Google Drive:</h6>
                        <a href="{{ $dokumentasi->link_gdrive }}" 
                           target="_blank" 
                           class="btn btn-outline-primary btn-sm">
                            <i class="fas fa-external-link-alt"></i> Buka Link Google Drive
                        </a>
                    </div>
                @endif

                <!-- Foto Gallery -->
                @if($dokumentasi->fotos->count() > 0)
                    <div class="mb-4">
                        <h6><i class="fas fa-images"></i> Foto ({{ $dokumentasi->fotos->count() }}):</h6>
                        <div class="row">
                            @foreach($dokumentasi->fotos as $foto)
                                <div class="col-md-4 col-sm-6 mb-3">
                                    <div class="card">
                                        <img src="{{ $foto->url }}" 
                                             class="card-img-top" 
                                             alt="{{ $foto->nama_file }}"
                                             style="height: 200px; object-fit: cover; cursor: pointer;"
                                             data-bs-toggle="modal" 
                                             data-bs-target="#fotoModal{{ $foto->id }}">
                                        <div class="card-body p-2">
                                            <small class="text-muted">{{ $foto->nama_file }}</small>
                                        </div>
                                    </div>
                                </div>

                                <!-- Modal untuk preview foto -->
                                <div class="modal fade" 
                                     id="fotoModal{{ $foto->id }}" 
                                     tabindex="-1">
                                    <div class="modal-dialog modal-lg modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">{{ $foto->nama_file }}</h5>
                                                <button type="button" 
                                                        class="btn-close" 
                                                        data-bs-dismiss="modal"></button>
                                            </div>
                                            <div class="modal-body text-center">
                                                <img src="{{ $foto->url }}" 
                                                     class="img-fluid" 
                                                     alt="{{ $foto->nama_file }}">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                @else
                    <div class="text-center py-4">
                        <i class="fas fa-images fa-2x text-muted mb-2"></i>
                        <p class="text-muted">Tidak ada foto untuk hari ini</p>
                    </div>
                @endif

                <!-- Info Tambahan -->
                <div class="row">
                    <div class="col-md-6">
                        <small class="text-muted">
                            <i class="fas fa-clock"></i> Dibuat: {{ $dokumentasi->created_at->format('d/m/Y H:i') }}
                        </small>
                    </div>
                    <div class="col-md-6 text-end">
                        <small class="text-muted">
                            <i class="fas fa-edit"></i> Diperbarui: {{ $dokumentasi->updated_at->format('d/m/Y H:i') }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Sidebar -->
    <div class="col-md-4">
        <!-- Action Buttons -->
        <div class="card mb-3">
            <div class="card-header">
                <h6><i class="fas fa-cogs"></i> Aksi</h6>
            </div>
            <div class="card-body">
                <div class="d-grid gap-2">
                    <a href="{{ route('dashboard.dokumentasi.edit', $dokumentasi) }}" 
                       class="btn btn-warning">
                        <i class="fas fa-edit"></i> Edit Dokumentasi
                    </a>
                    
                    <form action="{{ route('dashboard.dokumentasi.destroy', $dokumentasi) }}" 
                          method="POST"
                          onsubmit="return confirm('Yakin ingin menghapus dokumentasi hari ke-{{ $dokumentasi->hari_ke }}? Semua foto akan ikut terhapus!')">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger w-100">
                            <i class="fas fa-trash"></i> Hapus Dokumentasi
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Informasi -->
        <div class="card">
            <div class="card-header">
                <h6><i class="fas fa-info-circle"></i> Informasi</h6>
            </div>
            <div class="card-body">
                <table class="table table-sm">
                    <tr>
                        <td><strong>Hari Ke:</strong></td>
                        <td>{{ $dokumentasi->hari_ke }}</td>
                    </tr>
                    <tr>
                        <td><strong>Jumlah Foto:</strong></td>
                        <td>{{ $dokumentasi->fotos->count() }}</td>
                    </tr>
                    <tr>
                        <td><strong>Google Drive:</strong></td>
                        <td>
                            @if($dokumentasi->link_gdrive)
                                <i class="fas fa-check text-success"></i> Ada
                            @else
                                <i class="fas fa-times text-danger"></i> Tidak Ada
                            @endif
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Navigation ke hari lain -->
        <div class="card mt-3">
            <div class="card-header">
                <h6><i class="fas fa-calendar"></i> Navigasi Hari</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    @for($i = 1; $i <= 5; $i++)
                        @php
                            $hariLain = \App\Models\Dokumentasi::where('hari_ke', $i)->first();
                        @endphp
                        <div class="col-2 mb-2">
                            @if($hariLain)
                                @if($hariLain->id == $dokumentasi->id)
                                    <button class="btn btn-primary btn-sm w-100" disabled>{{ $i }}</button>
                                @else
                                    <a href="{{ route('dashboard.dokumentasi.show', $hariLain) }}" 
                                       class="btn btn-outline-primary btn-sm w-100">{{ $i }}</a>
                                @endif
                            @else
                                <button class="btn btn-outline-secondary btn-sm w-100" disabled>{{ $i }}</button>
                            @endif
                        </div>
                    @endfor
                </div>
                <small class="text-muted">Klik nomor untuk melihat hari lain</small>
            </div>
        </div>
    </div>
</div>

<!-- Back Button -->
<div class="mt-3">
    <a href="{{ route('dashboard.dokumentasi.index') }}" class="btn btn-secondary">
        <i class="fas fa-arrow-left"></i> Kembali ke Daftar
    </a>
</div>
@endsection