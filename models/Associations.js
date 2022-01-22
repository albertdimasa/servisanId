import db from "../config/Database.js";
import Orders from "./OrderModel.js";
import Services from "./ServiceModel.js";
import Stores from "./StoreModel.js";
import Users from "./UserModel.js";

Stores.hasMany(Services, { onDelete: "CASCADE" });
Services.belongsTo(Stores, { onDelete: "CASCADE" });

Services.hasMany(Orders, { onDelete: "CASCADE" });
Orders.belongsTo(Services, { onDelete: "CASCADE" });

Users.hasMany(Orders, { onDelete: "CASCADE" });
Orders.belongsTo(Users, { onDelete: "CASCADE" });

const relate = db
  .sync({ alter: true })
  .then(() => {
    Stores.bulkCreate(
      [
        {
          nama: "Genius Phone Service Center",
          alamat:
            "Jl. Diponegoro No.9, Rw4, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61212",
          jam_buka: 8,
          jam_tutup: 22,
          kategori_layanan: "iphone",
        },
        {
          nama: "Apple Store & Service Center",
          alamat:
            "Perumahan Pabean Asri, Daras, Pabean, Sedati, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61253",
          jam_buka: 8,
          jam_tutup: 22,
          kategori_layanan: "iphone",
        },
        {
          nama: "Sidoarjo Laptop",
          alamat:
            "Perumahan, Kemiri Indah No.7, RT.17/RW.5, Bluru Cilik, Kemiri, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61234",
          jam_buka: 8,
          jam_tutup: 22,
          kategori_layanan: "laptop",
        },
        {
          nama: "Bengkel Komputer",
          alamat:
            "Jl. Kartini No.25, Sidoklumpuk, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61218",
          jam_buka: 8,
          jam_tutup: 20,
          kategori_layanan: "laptop",
        },
        {
          nama: "Ahmad Abdu Elektronik",
          alamat:
            "Dsn. Cemengkapuk, Desa, Kadul, Cemeng Kalang, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61234",
          jam_buka: 7,
          jam_tutup: 17,
          kategori_layanan: "tv",
        },
      ],
      { ignoreDuplicates: false }
    );

    Services.bulkCreate(
      [
        {
          nama: "Ganti LCD",
          harga: "75000",
          storeId: 1,
        },
        {
          nama: "Ganti Baterai",
          harga: "125000",
          storeId: 1,
        },
        {
          nama: "Pasang Anti Gores",
          harga: "25000",
          storeId: 2,
        },
        {
          nama: "Mati Total",
          harga: "150000",
          storeId: 2,
        },
        {
          nama: "Install Ulang",
          harga: "75000",
          storeId: 3,
        },
        {
          nama: "Engsel Pecah",
          harga: "75000",
          storeId: 4,
        },
        {
          nama: "TV Nyala Suara Hilang",
          harga: "125000",
          storeId: 5,
        },
      ],
      { ignoreDuplicates: false }
    );
  })
  .catch((err) => {
    console.log(err);
  });

export default relate;
