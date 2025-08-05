import { IDetectedBarcode, Scanner, outline } from "@yudiel/react-qr-scanner";

import React, { useEffect, useState } from "react";

import { Link, router, useForm } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Button, buttonVariants } from "@/Components/ui/button";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

function Page({ auth }) {
  const { toast } = useToast();

  const [csrfToken, setCsrfToken] = useState("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { data, setData, post, processing } = useForm({
    qr_code: "",
  });

  const handleScan = async (data: string) => {
    if (data) {
      setLoading(true);
      try {
        // Kirim QR code langsung ke endpoint create dengan parameter qr_code
        const response = await fetch(`/dashboard/komdis/create?qr_code=${encodeURIComponent(data)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
          },
        });

        const getResult = await response.json();

        if (getResult.success) {
          toast({
            title: "Mahasiswa Ditemukan",
            variant: "default",
            description: `${getResult.data.name} - ${getResult.data.nim}`,
          });
          
          // Redirect ke halaman komdis dengan data
          setTimeout(() => {
            router.get(route('dashboard.komdis.index'), {
              userData: JSON.stringify(getResult.data),
              redirectToInput: true
            });
          }, 1500);
        } else {
          toast({
            title: "Mahasiswa Tidak Ditemukan",
            variant: "destructive",
            description: getResult.message || "QR Code tidak terdaftar dalam sistem",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast({
          title: "Error",
          variant: "destructive",
          description: "Terjadi kesalahan saat memproses QR code",
        });
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fungsi untuk mendapatkan token CSRF dari API
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(route("csrf"));
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  useFlashToast();

  return (
    <>
      <DashboardLayout user={auth.user}>
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <div className="md:w-[100%] w-[75vw] h-[70vh] items-center justify-center">
            <h2 className="text-xl font-bold tracking-tight text-center mb-4">
              QR Scanner - Log Komdis
            </h2>

            {loading ? (
              <div className="border-b-purple-900 flex items-center justify-center w-full h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
                  <p>Memproses QR Code...</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <div className="md:w-64">
                  <Scanner
                    onScan={function (detectedCodes: IDetectedBarcode[]): void {
                      const latestCode = detectedCodes.at(-1)?.rawValue;
                      if (latestCode) {
                        handleScan(latestCode);
                        setResult(latestCode);
                      }
                    }}
                    components={{
                      finder: true,
                      tracker: outline,
                      zoom: true,
                    }}
                    allowMultiple={true}
                    scanDelay={2000}
                    paused={loading}
                    styles={{
                      container: {
                        width: "100%",
                      },
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center gap-3 mt-4">
            <Link 
              href={route("dashboard.komdis.index")} 
              className={buttonVariants()}
            >
              Input Manual
            </Link>
            
            {result && (
              <p className="md:block hidden text-sm text-gray-600">
                Last Scanned: {result.substring(0, 50)}{result.length > 50 ? '...' : ''}
              </p>
            )}
          </div>
        </div>
      </DashboardLayout>
      <Toaster />
    </>
  );
}

export default Page;