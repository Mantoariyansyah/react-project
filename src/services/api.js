import axios from "axios";

// Buat instance Axios
const API = axios.create({
  baseURL: "https://103.127.133.53//api", // URL API backend
});

// Fungsi POST
export const daftarSiswa = (data) => API.post("/student", data);
export const keterangan = (data) => API.post("/student-existing", data);
export const permohonan = (data) => API.post("/scholarship", data);
export const layananpres = (data) => API.post("/achievment", data);
export const alumni = (data) => API.post("/alumni", data);
export const kontakme = (data) => API.post("/contact-information", data);

// Fungsi GET untuk jadwal pelajaran
export const jadPel = () => API.get("/schedule-lesson");

export default API;
