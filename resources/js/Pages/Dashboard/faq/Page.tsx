import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { IconPlus } from "@tabler/icons-react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { FAQClient } from "@/Components/tables/faq/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Faq", link: "/dashboard/faq" },
];

export default function Page({ auth }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const { data, setData, post, processing, errors, reset } = useForm({
    pertanyaan: "",
    jawaban: "",
  });

  const addFAQ = (e) => {
    e.preventDefault();
    
    post(route("dashboard.faq.store"), {
      onSuccess: () => {
        // Reset form
        reset();
        // Tutup dialog
        setDialogOpen(false);
        // Reload halaman atau refresh data
        window.location.reload();
      },
      onError: (errors) => {
        console.log("Validation errors:", errors);
      }
    });
  };

  return (
    <DashboardLayout user={auth.user}>
      <Breadcrumbs items={breadcrumbItems} />
      <h2 className="text-3xl font-inter font-bold tracking-tight">Atur FAQ</h2>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button className="gap-2" onClick={() => setDialogOpen(true)}>
            <IconPlus size={20} className="-ml-2" /> Tambah FAQ
          </Button>
        </DialogTrigger>
        
        <DialogContent className="font-inter sm:max-w-[425px]">
          <form onSubmit={addFAQ}>
            <DialogHeader>
              <DialogTitle>Tambah FAQ</DialogTitle>
              <DialogDescription>
                Tambahkan pertanyaan dan jawaban FAQ baru.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="flex flex-col">
                <Label htmlFor="question" className="text-left">
                  Pertanyaan
                </Label>
                <Input
                  id="question"
                  value={data.pertanyaan}
                  onChange={(e) => setData("pertanyaan", e.target.value)}
                  placeholder="Pertanyaan"
                  className="mt-1"
                  required
                />
                {errors.pertanyaan && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.pertanyaan}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col">
                <Label htmlFor="answer" className="text-left">
                  Jawaban
                </Label>
                <Textarea
                  id="answer"
                  value={data.jawaban}
                  onChange={(e) => setData("jawaban", e.target.value)}
                  placeholder="Jawaban dari pertanyaan"
                  className="mt-1"
                  required
                />
                {errors.jawaban && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.jawaban}
                  </span>
                )}
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setDialogOpen(false)}
              >
                Batalkan
              </Button>
              <Button
                type="submit"
                disabled={processing}
              >
                {processing ? "Menambah..." : "Tambah"}
              </Button>
            </DialogFooter>
            
            {processing && (
              <p className="text-center text-sm text-gray-500 mt-2">
                Sending data...
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>
      
      <FAQClient />
    </DashboardLayout>
  );
}