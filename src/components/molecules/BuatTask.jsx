import { useState } from "react";
import Paragraf from "../atoms/Paragraf";
import TextInput from "./TextInput";

const BuatTask = () => {
  return (
    <div className="mx-6 my-7 bg-white">
      <div className="px-6 border shadow-md py-4">
        <Paragraf size="16px" color="text-[#000]" text="Buat Task Baru" />
      </div>
      <div className="px-6">
        <div>
          <TextInput
            name="task_no"
            text="Task No"
            placeholder="Task No"
            value="SM-PB-001/24/2024"
          />
        </div>
        <TableComponent />
      </div>
    </div>
  );
};

// Data dummy untuk pagination
const allData = [
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
  {
    kode: "GMI-555-BALL",
    nama: "GMI-555-BALL",
    merk: "555",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 100,
  },
  {
    kode: "GMI-212-UNIT",
    nama: "GMI-212-UNIT",
    merk: "212UNIT",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-123-BALL",
    nama: "GMI-123-BALL",
    merk: "123-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-124-BALL",
    nama: "GMI-124-BALL",
    merk: "124-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 110,
  },
  {
    kode: "GMI-125-BALL",
    nama: "GMI-125-BALL",
    merk: "125-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 115,
  },
  {
    kode: "GMI-126-BALL",
    nama: "GMI-126-BALL",
    merk: "126-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-127-BALL",
    nama: "GMI-127-BALL",
    merk: "127-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 118,
  },
  {
    kode: "GMI-128-BALL",
    nama: "GMI-128-BALL",
    merk: "128-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 119,
  },
  {
    kode: "GMI-129-BALL",
    nama: "GMI-129-BALL",
    merk: "129-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 120,
  },
  {
    kode: "GMI-130-BALL",
    nama: "GMI-130-BALL",
    merk: "130-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 121,
  },
  {
    kode: "GMI-131-BALL",
    nama: "GMI-131-BALL",
    merk: "131-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 122,
  },
  {
    kode: "GMI-132-BALL",
    nama: "GMI-132-BALL",
    merk: "132-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 123,
  },
  {
    kode: "GMI-133-BALL",
    nama: "GMI-133-BALL",
    merk: "133-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 124,
  },
  {
    kode: "GMI-134-BALL",
    nama: "GMI-134-BALL",
    merk: "134-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 125,
  },
  {
    kode: "GMI-135-BALL",
    nama: "GMI-135-BALL",
    merk: "135-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 126,
  },
  {
    kode: "GMI-136-BALL",
    nama: "GMI-136-BALL",
    merk: "136-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 127,
  },
  {
    kode: "GMI-137-BALL",
    nama: "GMI-137-BALL",
    merk: "137-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 128,
  },
  {
    kode: "GMI-138-BALL",
    nama: "GMI-138-BALL",
    merk: "138-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 129,
  },
  {
    kode: "GMI-139-BALL",
    nama: "GMI-139-BALL",
    merk: "139-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 130,
  },
  {
    kode: "GMI-140-BALL",
    nama: "GMI-140-BALL",
    merk: "140-TIPE",
    jenis: "Ball-Joint",
    gudang: "Tamansari",
    stock: 131,
  },
];

// Fungsi untuk memecah data menjadi halaman
const paginate = (data, itemsPerPage) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(data.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage));
  }
  return pages;
};

const TableComponent = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // State untuk jumlah item per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(""); // State untuk input halaman tujuan

  const paginatedData = paginate(allData, itemsPerPage); // Pecah data menjadi halaman
  const totalData = allData.length; // Total data
  const totalPages = paginatedData.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGoToPage = () => {
    const page = parseInt(goToPage, 10);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setGoToPage(""); // Bersihkan input setelah pindah halaman
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10)); // Ubah jumlah item per halaman
    setCurrentPage(1); // Reset halaman ke 1 saat jumlah item per halaman diubah
  };

  const renderPagination = () => {
    const maxPagesToShow = 3;
    const paginationItems = [];

    if (totalPages <= 5) {
      // Tampilkan semua halaman jika jumlah halaman <= 5
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            style={{
              padding: "5px",
              marginRight: "5px",
              backgroundColor: currentPage === i ? "#007BFF" : "#f0f0f0",
              color: currentPage === i ? "#fff" : "#000",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {i}
          </button>
        );
      }
    } else {
      // Pagination dengan format "1 ... 4 5 6 ... totalPages"
      paginationItems.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          style={{
            padding: "5px",
            marginRight: "5px",
            backgroundColor: currentPage === 1 ? "#007BFF" : "#f0f0f0",
            color: currentPage === 1 ? "#fff" : "#000",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          1
        </button>
      );

      if (currentPage > maxPagesToShow) {
        paginationItems.push(<span key="left-dots">...</span>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            style={{
              padding: "5px",
              marginRight: "5px",
              backgroundColor: currentPage === i ? "#007BFF" : "#f0f0f0",
              color: currentPage === i ? "#fff" : "#000",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - maxPagesToShow) {
        paginationItems.push(<span key="right-dots">...</span>);
      }

      paginationItems.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          style={{
            padding: "5px",
            marginRight: "5px",
            backgroundColor: currentPage === totalPages ? "#007BFF" : "#f0f0f0",
            color: currentPage === totalPages ? "#fff" : "#000",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {totalPages}
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tambah Barang</h2>
      <div>
        <input
          type="text"
          placeholder="Cari kode/ nama barang"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#FFC107",
            border: "none",
            cursor: "pointer",
          }}
        >
          Cari
        </button>
      </div>
      <table
        style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={styles.th}>
              <input type="checkbox" />
            </th>
            <th style={styles.th}>Kode Barang</th>
            <th style={styles.th}>Nama Barang</th>
            <th style={styles.th}>Merk</th>
            <th style={styles.th}>Jenis Barang</th>
            <th style={styles.th}>Gudang</th>
            <th style={styles.th}>Total Stock (Pcs)</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData[currentPage - 1].map((item, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>
                <input type="checkbox" />
              </td>
              <td style={styles.td}>{item.kode}</td>
              <td style={styles.td}>{item.nama}</td>
              <td style={styles.td}>{item.merk}</td>
              <td style={styles.td}>{item.jenis}</td>
              <td style={styles.td}>{item.gudang}</td>
              <td style={styles.td}>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{renderPagination()}</div>
        <div>
          <label>
            Items per page:
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
        </div>
        <div>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={goToPage}
            onChange={(e) => setGoToPage(e.target.value)}
            style={{ padding: "5px", width: "50px", marginRight: "10px" }}
            placeholder="Go"
          />
          <button
            onClick={handleGoToPage}
            style={{ padding: "5px", cursor: "pointer" }}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  th: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
    backgroundColor: "#f8f8f8",
  },
  tr: {
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};
export default BuatTask;
