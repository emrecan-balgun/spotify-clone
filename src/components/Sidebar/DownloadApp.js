import { Icon } from 'Icons';

function DownloadApp() {
  return (
    <a href="#" className="h-10 flex flex-shrink-0 items-center text-sm gap-x-4 font-semibold text-link hover:text-white px-6">
        <Icon name="download" size={20} />
        Uygulamayı Yükle
    </a>
  )
}

export default DownloadApp