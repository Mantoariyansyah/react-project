import axios from "axios";

// Buat instance Axios
const API = axios.create({
  baseURL: "http://103.127.133.53:5002/api", // URL API backend
});

// Fungsi POST
export const daftarSiswa = (data) => API.post("/student", data);
export const keterangan = (data) => API.post("/student-existing", data);
export const permohonan = (data) => API.post("/scholarship", data);
export const layananpres = (data) => API.post("/achievment", data);
export const alumni = (data) => API.post("/alumni", data);
export const kontakme = (data) => API.post("/contact-information", data);

// Fungsi GET
export const jadPel = () => API.get("/schedule-lesson");
export const dataGuru = () => API.get("/teacher");
export const aloemni = () => API.get("/alumni");
export const prestasiList = () => API.get("/achievment");
export const beritaList = () => API.get("/news-report");
export const beritaDetail = (id) => API.get(`/news-report/${id}`);




export default API;
