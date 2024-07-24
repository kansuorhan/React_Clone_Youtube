import { millify } from 'millify';
import { useState } from 'react';

const VideoInfo = ({ video }) => {
  // metnini tamamı gösterilcek mi state'i
  const [isFull, setIsFull] = useState(false);

  // tarihi formatla
  const date = new Date(video.publishDate).toLocaleDateString('tr', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // metnin gösterilecek karakter sınırını belirle
  const text = isFull // hepsi gösterilecek state'i true ise:
    ? video.description // metnin tamamı
    : video.description.slice(0, 150) + '..daha fazla'; // yoksa ilk 150 karakter

  return (
    <div
      onClick={() => setIsFull(!isFull)}
      className="bg-zinc-700 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2 font-bold">
        <p>{millify(video.viewCount)} Görüntülenme</p>

        <p>{date}</p>
      </div>

      <p>
        {text.split('\n').map((line, key) => (
          <span key={key}>
            {line} <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
