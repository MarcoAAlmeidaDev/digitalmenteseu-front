// src/components/blog/AdBanner.tsx
export function AdBanner() {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
      <div className="relative bg-gray-100 w-full h-full min-h-[300px] flex items-center justify-center">
        {/* Placeholder para o banner do Google AdSense */}
        <div className="text-gray-400 text-center p-4">
          <p className="text-lg font-medium">Espaço para Anúncio</p>
          <p className="text-sm">Google AdSense</p>
        </div>

        {/* Em produção, adicione o script do Google AdSense aqui */}
        {/* 
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" 
          crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        */}
      </div>
    </div>
  );
}