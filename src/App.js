import React, { useState } from 'react';
import placeholder144 from './image/144.png';
import placeholder240 from './image/240.png';
import placeholder480 from './image/480.jpg';
import placeholder720 from './image/720.jpg';
import placeholder1080 from './image/1080.jpg';
import './App.css'; // Import file CSS để tùy chỉnh giao diện

const App = () => {
  // Mảng các đường dẫn hình ảnh với chất lượng khác nhau
  const imageQualities = [
    { label: '144p', value: placeholder144 },
    { label: '240p', value: placeholder240 },
    { label: '480p', value: placeholder480 },
   { label: '720p', value: placeholder720},
    { label: '1080p', value: placeholder1080 }
  ];

  // Khai báo state để lưu đường dẫn hình ảnh hiện tại
  const [imageUrl, setImageUrl] = useState(imageQualities[0].value);

  // Hàm xử lý sự kiện khi thay đổi chất lượng
  const handleQualityChange = (event) => {
    const selectedQuality = event.target.value;
    const selectedImageUrl = imageQualities.find((quality) => quality.label === selectedQuality).value;
    setImageUrl(selectedImageUrl);
  };

  return (
    <div className="container">
      {/* Hình ảnh được hiển thị với đường dẫn được lấy từ state */}
      <img src={imageUrl} alt="Placeholder" className="image" />
      {/* Dropdown select để chọn chất lượng hình ảnh */}
      <select onChange={handleQualityChange} className="select">
        {imageQualities.map((quality, index) => (
          <option key={index} value={quality.label}>
            {quality.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
