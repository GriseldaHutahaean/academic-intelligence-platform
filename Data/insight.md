# Insight Summary - Academic Intelligence Platform

## Ringkasan Eksekutif

Berdasarkan hasil Exploratory Data Analysis (EDA), ditemukan bahwa faktor finansial memiliki hubungan yang paling kuat dengan hasil akademik mahasiswa. Variabel seperti status tunggakan pembayaran (Debtor), kelancaran pembayaran biaya kuliah (Tuition Fees Up To Date), dan status penerima beasiswa (Scholarship Holder) menunjukkan pola yang konsisten terhadap tingkat kelulusan maupun risiko dropout. Selain itu, faktor usia dan gender juga menunjukkan perbedaan karakteristik akademik, meskipun pengaruhnya tidak sekuat faktor finansial.

1. Distribusi Status Akademik Mahasiswa

Analisis menunjukkan bahwa mahasiswa dalam dataset terbagi ke dalam tiga kategori utama, yaitu Graduate, Dropout, dan Enrolled. Distribusi ini memberikan gambaran umum mengenai tingkat keberhasilan dan retensi mahasiswa selama masa studi.

Insight
Sebagian besar mahasiswa berhasil menyelesaikan studinya hingga lulus.
Namun, masih terdapat proporsi mahasiswa yang mengalami dropout dan memerlukan perhatian lebih lanjut.
Tingkat dropout yang ada menunjukkan pentingnya sistem pemantauan dan intervensi dini bagi mahasiswa berisiko.

2. Pengaruh Status Beasiswa

Visualisasi menunjukkan bahwa mahasiswa penerima beasiswa memiliki proporsi kelulusan yang lebih tinggi dibandingkan mahasiswa yang tidak menerima beasiswa.

Insight
Mahasiswa penerima beasiswa cenderung lebih berhasil menyelesaikan studinya.
Dukungan finansial berpotensi membantu mahasiswa dalam mempertahankan fokus dan keberlanjutan pendidikan.
Tingkat dropout relatif lebih rendah pada kelompok penerima beasiswa.
Implikasi

Program beasiswa dapat menjadi salah satu strategi efektif untuk meningkatkan tingkat kelulusan dan mengurangi risiko dropout mahasiswa.

3. Pengaruh Status Debtor

Status debtor menunjukkan pola yang sangat jelas terhadap hasil akademik mahasiswa.

Insight
Mahasiswa yang memiliki tunggakan pembayaran menunjukkan proporsi dropout yang jauh lebih tinggi dibandingkan mahasiswa yang tidak memiliki tunggakan.
Sebaliknya, mahasiswa tanpa tunggakan pembayaran memiliki tingkat kelulusan yang jauh lebih tinggi.
Status debtor dapat menjadi indikator awal risiko dropout.
Implikasi

Data tunggakan pembayaran dapat digunakan sebagai komponen penting dalam sistem Early Warning System untuk mendeteksi mahasiswa yang membutuhkan bantuan lebih awal.

4. Pengaruh Kelancaran Pembayaran Biaya Kuliah

Analisis menunjukkan hubungan yang sangat kuat antara status pembayaran biaya kuliah dengan hasil akademik mahasiswa.

Insight
Mahasiswa yang selalu memperbarui pembayaran biaya kuliah memiliki tingkat kelulusan yang jauh lebih tinggi.
Mahasiswa yang tidak membayar tepat waktu menunjukkan proporsi dropout yang lebih besar.
Kelancaran pembayaran mencerminkan stabilitas finansial mahasiswa selama masa studi.
Implikasi

Monitoring status pembayaran dapat membantu institusi mengidentifikasi mahasiswa yang berpotensi mengalami kesulitan akademik maupun finansial.

5. Pengaruh Usia Saat Masuk Perguruan Tinggi

Analisis usia menunjukkan adanya perbedaan distribusi usia antar kelompok mahasiswa.

Insight
Mahasiswa yang mengalami dropout cenderung memiliki usia masuk yang lebih tinggi dibandingkan mahasiswa yang berhasil lulus.
Mahasiswa yang lulus umumnya memiliki rentang usia yang lebih homogen.
Usia dapat menjadi salah satu faktor yang berkaitan dengan proses adaptasi akademik dan sosial di lingkungan perguruan tinggi.
Implikasi

Institusi dapat mempertimbangkan pendekatan dukungan yang lebih personal bagi mahasiswa dengan karakteristik usia yang berbeda.

6. Analisis Berdasarkan Gender

Visualisasi menunjukkan adanya perbedaan distribusi hasil akademik antar kelompok gender.

Insight
Salah satu kelompok gender menunjukkan proporsi kelulusan yang lebih tinggi.
Kelompok gender lainnya menunjukkan proporsi dropout yang relatif lebih besar.
Temuan ini menunjukkan bahwa karakteristik gender dapat berkaitan dengan pola keberhasilan akademik mahasiswa.
Implikasi

Perlu dilakukan analisis lanjutan untuk memahami faktor-faktor yang mendasari perbedaan tersebut sehingga dapat dirancang program dukungan yang lebih tepat sasaran.

7. Analisis Korelasi Variabel

Hasil heatmap menunjukkan adanya hubungan antar beberapa variabel dalam dataset.

Insight
Faktor finansial menunjukkan hubungan yang lebih jelas dengan hasil akademik dibandingkan faktor demografis.
Variabel seperti status pembayaran, status debtor, dan status beasiswa memiliki potensi sebagai prediktor penting dalam model machine learning.
Variabel-variabel tersebut layak diprioritaskan pada tahap pengembangan model prediksi dropout.
Kesimpulan Utama

Berdasarkan seluruh hasil analisis, ditemukan tiga faktor yang paling berkaitan dengan keberhasilan akademik mahasiswa:

1. Stabilitas Finansial

Mahasiswa yang memiliki kondisi finansial lebih stabil, ditunjukkan melalui status pembayaran yang baik dan tidak memiliki tunggakan, cenderung memiliki tingkat kelulusan yang lebih tinggi.

2. Dukungan Finansial

Penerima beasiswa menunjukkan hasil akademik yang lebih baik dibandingkan mahasiswa non-penerima beasiswa.

3. Karakteristik Demografis

Usia dan gender menunjukkan perbedaan pola akademik, meskipun pengaruhnya tidak sekuat faktor finansial.

Business Recommendation

Berdasarkan hasil analisis, institusi pendidikan dapat mengembangkan Student Early Warning System yang memanfaatkan indikator berikut:

Status Debtor
Tuition Fees Up To Date
Scholarship Holder
Age at Enrollment
Academic Performance Indicators

Sistem ini dapat membantu kampus mengidentifikasi mahasiswa berisiko dropout lebih awal sehingga intervensi dapat dilakukan sebelum mahasiswa benar-benar meninggalkan studinya.

note 
- 0: No, 1: Yes
- 0: Female, 1: Male