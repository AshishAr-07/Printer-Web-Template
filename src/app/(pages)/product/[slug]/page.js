"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchProduct } from "@/Api";
import Link from "next/link";
import { Loader2Icon } from 'lucide-react';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProduct();
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, []);

  const currentProduct = products[currentProductIndex] || {};

  const allImages = [
    currentProduct.image,
    ...(currentProduct.additionalimage || []),
  ].filter(Boolean);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg font-medium">Loading...</span>
      </div>
    );
  }

  return (
   <>
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-16 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {allImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <Image
                          loading = 'eager'
                          src={image}
                          alt={`${currentProduct.title} - Image ${index + 1}`}
                          width={500}
                          height={500}
                          className="w-full h-full p-8 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {currentProduct.title}
          </h1>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl md:text-3xl font-medium hover-color">
              ₹{currentProduct.saleprice}
            </span>
            <span className="text-lg md:text-xl text-gray-500 line-through">
              ₹{currentProduct?.price}
            </span>
          </div>

          {currentProduct.category && (
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                Category
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[var(--lightcolor)] px-3 py-1 rounded-full text-sm font-medium border shadow-sm cursor-default">
                  {currentProduct.category}
                </span>
              </div>
            </div>
          )}

          <p className="text-lg pb-6">{currentProduct.shortdesc}</p>

          <Link href={`/contact?subject=${currentProduct.title}`}>
            <button className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 text-white bg-[var(--maincolor)] rounded-lg shadow-md">
              <span>Contact Now</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <div className="border-b mb-3">
          <h2 className="text-2xl font-semibold text-gray-900 pb-3">
            Full Description
          </h2>
        </div>
        <p className="text-lg leading-relaxed">{currentProduct.Decription}</p>
      </div>
    </div>
    <div className='py-8'></div></>
  );
}

