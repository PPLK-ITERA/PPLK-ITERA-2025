@extends('layouts.app')

@section('title', 'Daftar Dokumentasi Kegiatan')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-4">
    <h2><i class="fas fa-list"></i> Daftar Dokumentasi Kegiatan</h2>
    <a href="{{ route('dashboard.dokumentasi.create') }}" class="btn btn-primary">
        <i class="fas fa-plus"></i> Tambah Dokumentasi
    </a>
</div>

@if($dokumentasi->count() > 0)
    <div class="row">
        @foreach($dokumentasi as $dok)
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card card-dokumentasi h-100">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-calendar-day"></i> Hari Ke-{{ $dok->hari_ke }}
                        </h5>
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2">
                            {{ $dok->judul ?: 'Tanpa Judul' }}
                        </h6>
                        
                        @if($dok->deskripsi)
                            <p class="card-text">
                                {{ Str::limit($dok->deskripsi, 100) }}
                            </p>
                        @endif

                        <div class="mb-3">
                            <small class="text-muted">
                                <i class="fas fa-images"></i> {{ $dok->jumlah_foto }} Foto
                            </small>
                            
                            @if($dok->link_gdrive)
                                <br>
                                <small class="text-muted">
                                    <i class="fab fa-google-drive"></i> 
                                    <a href="{{ $dok->link_gdrive }}" target="_blank" class="text-decoration-none">
                                        Link Google Drive
                                    </a>
                                </small>
                            @endif
                        </div>

                        <!-- Preview foto pertama jika ada -->
                        @if($dok->fotos->count() > 0)
                            <div class="mb-3">
                                <img src="{{ $dok->fotos->first()->url }}" 
                                     alt="Preview" 
                                     class="foto-thumbnail">
                                @if($dok->fotos->count() > 1)
                                    <small class="text-muted ms-2">+{{ $dok->fotos->count() - 1 }} foto lainnya</small>
                                @endif
                            </div>
                        @endif
                    </div>
                    <div class="card-footer">
                        <div class="btn-group w-100" role="group">
                            <a href="{{ route('dashboard.dokumentasi.show', $dok) }}" 
                               class="btn btn-outline-info btn-sm">
                                <i class="fas fa-eye"></i> Detail
                            </a>
                            <a href="{{ route('dashboard.dokumentasi.edit', $dok) }}" 
                               class="btn btn-outline-warning btn-sm">
                                <i class="fas fa-edit"></i> Edit
                            </a>
                            <form action="{{ route('dashboard.dokumentasi.destroy', $dok) }}" 
                                  method="POST" 
                                  class="d-inline"
                                  onsubmit="return confirm('Yakin ingin menghapus dokumentasi hari ke-{{ $dok->hari_ke }}?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-outline-danger btn-sm">
                                    <i class="fas fa-trash"></i> Hapus
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@else
    <div class="text-center py-5">
        <i class="fas fa-folder-open fa-4x text-muted mb-3"></i>
        <h4 class="text-muted">Belum Ada Dokumentasi</h4>
        <p class="text-muted">Mulai mendokumentasikan kegiatan 5 hari Anda</p>
        <a href="{{ route('dashboard.dokumentasi.create') }}" class="btn btn-primary">
            <i class="fas fa-plus"></i> Tambah Dokumentasi Pertama
        </a>
    </div>
@endif

<!-- Progress Bar -->
<div class="mt-4">
    <div class="card">
        <div class="card-body">
            <h6 class="card-title">Progress Dokumentasi</h6>
            <div class="progress mb-2">
                <div class="progress-bar" 
                     role="progressbar" 
                     style="width: {{ ($dokumentasi->count() / 5) * 100 }}%">
                    {{ $dokumentasi->count() }}/5 Hari
                </div>
            </div>
            <small class="text-muted">
                Hari yang sudah didokumentasikan: 
                @foreach($dokumentasi->pluck('hari_ke') as $hari)
                    <span class="badge bg-success">{{ $hari }}</span>
                @endforeach
            </small>
        </div>
    </div>
</div>
@endsection