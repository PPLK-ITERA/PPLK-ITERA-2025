import React, { useState } from "react";
import { router, useForm } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Komdis", link: "/dashboard/komdis" },
  { title: "Edit", link: "#" },
];

export default function Edit({ auth, logKomdis, statusOptions }: any) {
  const { data, setData, put, processing, errors } = useForm({
    kesalahan: logKomdis.kesalahan || "",
    kategori: logKomdis.kategori || "",
    keterangan: logKomdis.keterangan || "",
    status: logKomdis.status || "belum diproses",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Submitting data:', data); // Debug log
    
    put(route('dashboard.komdis.update', logKomdis.id), {
      onSuccess: () => {
        console.log('Update successful'); // Debug log
        router.get(route('dashboard.komdis.index'));
      },
      onError: (errors) => {
        console.error('Update errors:', errors);
      }
    });
  };

  return (
    <DashboardLayout user={auth.user}>
      <h2 className="text-3xl font-bold tracking-tight mb-4">Edit Log Komdis</h2>

      <Breadcrumbs items={breadcrumbItems} />

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>
            Edit Kesalahan untuk {logKomdis.user?.name} ({logKomdis.user?.nim})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Kesalahan/Pelanggaran: *
              </label>
              <Textarea
                placeholder="Masukkan detail kesalahan atau pelanggaran yang dilakukan"
                value={data.kesalahan}
                onChange={(e) => setData('kesalahan', e.target.value)}
                required
                rows={4}
                className={errors.kesalahan ? 'border-red-500' : ''}
              />
              {errors.kesalahan && (
                <p className="text-red-500 text-sm mt-1">{errors.kesalahan}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Kategori:
              </label>
              <Input
                placeholder="Kategori pelanggaran (contoh: Kedisiplinan, Kebersihan, dll)"
                value={data.kategori}
                onChange={(e) => setData('kategori', e.target.value)}
                className={errors.kategori ? 'border-red-500' : ''}
              />
              {errors.kategori && (
                <p className="text-red-500 text-sm mt-1">{errors.kategori}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Keterangan Tambahan:
              </label>
              <Textarea
                placeholder="Keterangan tambahan jika diperlukan"
                value={data.keterangan}
                onChange={(e) => setData('keterangan', e.target.value)}
                rows={3}
                className={errors.keterangan ? 'border-red-500' : ''}
              />
              {errors.keterangan && (
                <p className="text-red-500 text-sm mt-1">{errors.keterangan}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Status: *
              </label>
              <Select value={data.status} onValueChange={(value) => setData('status', value)}>
                <SelectTrigger className={errors.status ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="belum diproses">Belum Diproses</SelectItem>
                  <SelectItem value="proses">Sedang Diproses</SelectItem>
                  <SelectItem value="selesai">Selesai</SelectItem>
                  <SelectItem value="dibatalkan">Dibatalkan</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">{errors.status}</p>
              )}
            </div>

            <div className="flex gap-2 pt-4">
              <Button 
                type="submit" 
                disabled={processing || !data.kesalahan.trim()}
              >
                {processing ? "💾 Menyimpan..." : "💾 Update Data"}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => router.get(route('dashboard.komdis.index'))}
                disabled={processing}
              >
                ❌ Batal
              </Button>
            </div>
          </form>

          {/* Debug Info */}
          {/* <div className="mt-4 p-4 bg-gray-100 rounded text-xs">
            <strong>Debug Info:</strong>
            <pre>{JSON.stringify({ data, errors, processing }, null, 2)}</pre>
          </div> */}
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}