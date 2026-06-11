# Business Insight

Berdasarkan hasil Exploratory Data Analysis (EDA) dan model machine learning yang telah dibangun, ditemukan beberapa faktor yang berpengaruh terhadap status akademik mahasiswa.

## 1. Performa akademik menjadi faktor paling berpengaruh

Hasil feature importance menunjukkan bahwa jumlah mata kuliah yang lulus (approved) dan nilai mahasiswa pada semester pertama dan kedua merupakan faktor yang paling berpengaruh dalam menentukan status akademik mahasiswa. Mahasiswa dengan performa akademik yang baik pada semester awal cenderung memiliki peluang lebih besar untuk lulus.

## 2. Faktor finansial memiliki hubungan dengan risiko dropout

Analisis menunjukkan bahwa mahasiswa yang memiliki tunggakan pembayaran (debtor) cenderung lebih banyak berada pada kategori dropout. Selain itu, mahasiswa yang membayar biaya kuliah tepat waktu memiliki tingkat kelulusan yang lebih tinggi dibandingkan mahasiswa yang mengalami keterlambatan pembayaran.

## 3. Beasiswa memberikan dampak positif

Mahasiswa penerima beasiswa menunjukkan proporsi kelulusan yang lebih tinggi dibandingkan mahasiswa yang tidak menerima beasiswa. Hal ini menunjukkan bahwa dukungan finansial dapat membantu mahasiswa lebih fokus dalam menjalani proses perkuliahan.

## 4. Data historis mahasiswa dapat dimanfaatkan untuk prediksi dini

Model Random Forest yang dibangun berhasil mencapai akurasi sebesar 77,29%. Hasil ini menunjukkan bahwa data akademik, finansial, dan demografis mahasiswa dapat dimanfaatkan untuk membantu memprediksi status akademik mahasiswa sejak dini.

---

# Business Recommendation

Berdasarkan hasil analisis yang telah dilakukan, terdapat beberapa rekomendasi yang dapat diterapkan oleh institusi pendidikan.

## 1. Membangun Early Warning System

Kampus dapat memanfaatkan data akademik mahasiswa untuk mengidentifikasi mahasiswa yang berisiko mengalami dropout. Sistem ini dapat memberikan peringatan kepada dosen wali atau pihak akademik sehingga tindakan pencegahan dapat dilakukan lebih awal.

## 2. Meningkatkan pendampingan akademik

Mahasiswa yang menunjukkan penurunan performa akademik pada semester pertama dan kedua dapat diberikan pendampingan melalui program mentoring, tutoring, atau konsultasi akademik secara berkala.

## 3. Memperhatikan kondisi finansial mahasiswa

Mahasiswa yang memiliki tunggakan pembayaran dapat menjadi kelompok prioritas untuk mendapatkan perhatian lebih. Kampus dapat menyediakan skema pembayaran yang lebih fleksibel atau bantuan finansial bagi mahasiswa yang membutuhkan.

## 4. Mengoptimalkan program beasiswa

Karena penerima beasiswa menunjukkan tingkat kelulusan yang lebih tinggi, kampus dapat mempertimbangkan perluasan program beasiswa sebagai salah satu strategi untuk meningkatkan retensi mahasiswa.

## 5. Mengembangkan dashboard monitoring mahasiswa

Hasil analisis ini dapat dikembangkan menjadi dashboard yang menampilkan kondisi akademik dan finansial mahasiswa secara real-time sehingga pihak kampus dapat melakukan pemantauan dan pengambilan keputusan yang lebih cepat dan tepat.

---

# Conclusion

Berdasarkan analisis yang telah dilakukan, faktor akademik dan finansial merupakan faktor yang paling berpengaruh terhadap status akademik mahasiswa. Hasil EDA menunjukkan bahwa performa akademik, status pembayaran biaya kuliah, status debtor, dan kepemilikan beasiswa memiliki hubungan dengan keberhasilan studi mahasiswa.

Model Random Forest yang dibangun berhasil mencapai akurasi sebesar 77,29% dalam memprediksi status mahasiswa ke dalam kategori Graduate, Dropout, dan Enrolled. Selain itu, hasil feature importance menunjukkan bahwa performa akademik pada semester pertama dan kedua merupakan faktor yang paling berpengaruh dalam proses prediksi.

Secara keseluruhan, hasil analisis menunjukkan bahwa data historis mahasiswa dapat dimanfaatkan untuk membantu institusi pendidikan dalam mengidentifikasi mahasiswa yang berisiko mengalami dropout dan mendukung pengambilan keputusan berbasis data untuk meningkatkan tingkat kelulusan mahasiswa.