import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { Camera, Home, Users } from 'lucide-react';
import logoImg from './img/logo.png';

export default function MaizeApp() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const creditsList = [
    { name: "Ana Luisa Paixão Panho", role: "Líder, Treinamento de IA" },
    { name: "Kemily de Santi", role: "Treinamento de IA" },
    { name: "Manuela Caldeira Machado", role: "Treinamento de IA" },
    { name: "Tiago Bernieri Dal Belo", role: "Vice-Líder, Programação" },
    { name: "Vanderlei Rossoni Pittan", role: "Design, Programação" }
  ];

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    if (activeScreen !== 'camera') {
      stopCamera();
    }
  }, [activeScreen]);

  const goCamera = async () => {
    setActiveScreen('camera');
    try {
      const constraints = {
        video: { 
          facingMode: { exact: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      };
      
      let mediaStream;
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (e) {
        mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: { ideal: 1280 }, height: { ideal: 720 } } 
        });
      }
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      alert("Erro ao acessar câmera: " + err.message);
      setActiveScreen('home');
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      alert("Foto capturada com sucesso! Analisando...");
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center font-sans antialiased select-none">
      <div className="w-full h-full max-w-[500px] bg-[#edf4ee] relative flex flex-col overflow-hidden">
        
        <header className="bg-gradient-to-r from-[#3f7b4f] to-[#5a9c69] text-white pt-[calc(15px+env(safe-area-inset-top))] px-6 pb-4 font-bold text-xl tracking-wide text-center z-50 shadow-md">
          Maize<span className="text-[#FDDD4D]">AI</span>
        </header>

        <main className="flex-1 w-full relative overflow-y-auto pb-[90px]">
          
          {activeScreen === 'home' && (
            <div className="text-center py-10 px-6 animate-fadeIn">
              <img 
                src={logoImg} 
                alt="MaizeAI Logo" 
                className="w-[60%] max-w-[220px] h-auto mx-auto mb-5 object-contain" 
              />
              
              <p className="text-base text-gray-900 leading-relaxed mb-8">
                <strong>Diagnóstico inteligente <br /> para folhas de milho</strong>
              </p>

              <button 
                onClick={goCamera}
                className="bg-gradient-to-b from-[#75BC8A] to-[#367B57] text-white flex items-center justify-center w-[90%] mx-auto py-[18px] px-4 border-2 border-[#6EA27D] rounded-2xl shadow-lg active:scale-95 transition-transform duration-100"
              >
                <Camera className="w-8 h-8 mr-4 text-white" />
                <div className="text-left">
                  <strong className="block text-base">Tirar foto da planta</strong>
                  <span className="text-xs opacity-90 block">Tocar para analisar</span>
                </div>
              </button>

              <p className="text-sm text-gray-600 mt-10 leading-relaxed">
                Identifique doenças como a <br /> Cercosporiose em segundos
              </p>
            </div>
          )}

          {activeScreen === 'credits' && (
            <div className="p-4 space-y-3 animate-fadeIn">
              {creditsList.map((member, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-[#c8d9c2] mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-[#2d4f36]">{member.name}</div>
                    <div className="text-xs text-[#6f7f72] mt-0.5">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeScreen === 'camera' && (
            /* Ajustado os eixos X e Y usando posicionamento fixo ancorado aos limites do app mobile */
            <div className="fixed top-[calc(54px+env(safe-area-inset-top))] left-1/2 -translate-x-1/2 w-full max-w-[500px] bottom-[calc(57px+env(safe-area-inset-bottom))] bg-black z-40 flex flex-col justify-between overflow-hidden">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover"
              />
              <canvas ref={canvasRef} className="hidden" />
              
              <div className="absolute bottom-6 w-full text-center z-50">
                <button 
                  onClick={takePhoto}
                  className="w-[75px] h-[75px] bg-white/20 border-4 border-white rounded-full mx-auto flex items-center justify-center active:scale-90 transition-transform"
                >
                  <div className="w-[55px] h-[55px] bg-white rounded-full" />
                </button>
                <p className="text-white text-xs mt-3 drop-shadow-md">Alinhe a folha no centro</p>
              </div>
            </div>
          )}

        </main>

        <nav className="absolute bottom-0 w-full bg-white flex justify-around pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] px-2 border-t border-gray-200 z-50">
          <button 
            onClick={goCamera}
            className={`flex-1 flex flex-col items-center gap-1 transition-all ${activeScreen === 'camera' ? 'opacity-100 font-bold text-[#4e8b63]' : 'opacity-40 text-gray-600'}`}
          >
            <Camera className="w-6 h-6" />
            <span className="text-[10px]">Tirar Foto</span>
          </button>

          <button 
            onClick={() => setActiveScreen('home')}
            className={`flex-1 flex flex-col items-center gap-1 transition-all ${activeScreen === 'home' ? 'opacity-100 font-bold text-[#4e8b63]' : 'opacity-40 text-gray-600'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-[10px]">Tela Inicial</span>
          </button>

          <button 
            onClick={() => setActiveScreen('credits')}
            className={`flex-1 flex flex-col items-center gap-1 transition-all ${activeScreen === 'credits' ? 'opacity-100 font-bold text-[#4e8b63]' : 'opacity-40 text-gray-600'}`}
          >
            <Users className="w-6 h-6" />
            <span className="text-[10px]">Créditos</span>
          </button>
        </nav>

      </div>
    </div>
  );
}