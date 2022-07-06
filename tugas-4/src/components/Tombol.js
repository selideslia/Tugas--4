function Tombol(props) {
  const notifikasi = () => {
    return alert(`Anda telah Mengklik Tombol ${props.nama}`);
  };

  return (
    <div>
      <button onClick={notifikasi}>{props.nama}</button>
    </div>
  );
}

export default Tombol;
