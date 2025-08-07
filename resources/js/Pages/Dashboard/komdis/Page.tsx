import React, { useEffect, useRef, useState } from "react";
import { usePage, router, Head } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Komdis", link: "/dashboard/komdis" },
];

export default function Page({ auth, logs, userData: initialUserData, redirectToInput }: any) {
  const [tab, setTab] = useState(redirectToInput ? "input" : "list");
  const [userData, setUserData] = useState<any>(initialUserData || null);
  const [kesalahan, setKesalahan] = useState("");

  // Handler untuk edit
  const handleEdit = (logId: number) => {
    router.get(route('dashboard.komdis.edit', logId));
  };

  // Handler untuk hapus
  const handleDelete = (logId: number) => {
    if (confirm('Yakin ingin menghapus data komdis ini?')) {
      router.delete(route('dashboard.komdis.destroy', logId), {
        onSuccess: () => {
          // Refresh halaman atau update state
          window.location.reload();
        },
        onError: (errors) => {
          alert('Gagal menghapus data');
        }
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.post(
      "/dashboard/komdis/store", // Perbaiki route
      {
        user_id: userData.id,
        kesalahan,
      },
      {
        onSuccess: () => {
          setKesalahan("");
          setUserData(null);
          setTab("list");
        },
        onError: (errors) => {
          console.error('Submit errors:', errors);
          alert(errors.kesalahan || "Terjadi kesalahan");
        },
      }
    );
  };

  return (
    <>
      <Head title="Log Komdis" />
      <DashboardLayout user={auth.user}>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Log Komdis</h2>

        <Breadcrumbs items={breadcrumbItems} />

        <Tabs defaultValue="list" value={tab} onValueChange={setTab} className="mt-4">
          <TabsList>
            <TabsTrigger value="list">Daftar Pelanggaran</TabsTrigger>
            <TabsTrigger value="scan">Scan QR</TabsTrigger>
            {userData && <TabsTrigger value="input">Isi Kesalahan</TabsTrigger>}
          </TabsList>

          <TabsContent value="list">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Data Pelanggaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="p-2">Nama</th>
                        <th className="p-2">NIM</th>
                        <th className="p-2">Kesalahan</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Tanggal</th>
                        <th className="p-2">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((log: any) => (
                        <tr key={log.id} className="border-b hover:bg-gray-50">
                          <td className="p-2">{log.user?.name}</td>
                          <td className="p-2">{log.user?.nim}</td>
                          <td className="p-2">{log.kesalahan}</td>
                          <td className="p-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              log.status === 'selesai' ? 'bg-green-100 text-green-800' :
                              log.status === 'proses' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {log.status || 'belum diproses'}
                            </span>
                          </td>
                          <td className="p-2">
                            {new Date(log.created_at).toLocaleDateString('id-ID')}
                          </td>
                          <td className="p-2">
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => handleEdit(log.id)}
                                className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-3 py-1.5 rounded-md"
                              >
                                {/* <IconEdit size={16} className="mr-1" /> */}
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => handleDelete(log.id)}
                                className="bg-red-500 hover:bg-red-600 text-white border-0 px-3 py-1.5 rounded-md"
                              >
                                {/* <IconTrash size={16} className="mr-1" /> */}
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scan">
            <div className="space-y-4">
              {/* QR Scanner hanya */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Scan QR Code dengan Kamera</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Klik tombol di bawah untuk membuka halaman QR scanner
                  </p>
                  <Button
                    onClick={() => router.get(route('dashboard.komdis.scanner'))}
                    className="w-full"
                    size="lg"
                  >
                    📷 Buka QR Scanner
                  </Button>
                  <div className="text-xs text-gray-500 mt-4 space-y-1">
                    <p>• Scanner akan membuka halaman terpisah</p>
                    <p>• Arahkan kamera ke QR code mahasiswa</p>
                    <p>• Hasil scan otomatis akan kembali ke halaman ini</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="input">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>
                  Isi Kesalahan untuk {userData?.name || userData?.nama} ({userData?.nim})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Kesalahan/Pelanggaran:
                    </label>
                    <Textarea
                      placeholder="Masukkan detail kesalahan atau pelanggaran yang dilakukan"
                      value={kesalahan}
                      onChange={(e) => setKesalahan(e.target.value)}
                      required
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" disabled={!kesalahan.trim()}>
                      Simpan Data
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setUserData(null);
                        setKesalahan("");
                        setTab("scan");
                      }}
                    >
                      Batal
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DashboardLayout>
    </>
  );
}
