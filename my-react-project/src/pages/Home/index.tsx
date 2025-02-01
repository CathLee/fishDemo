// components/Gallery.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArtworkCard from './ArtworkCard';
import { artworks } from '../../data/artworks';
import Header from '../../component/Header';
import '../../../styles/globals.css'
const Gallery: React.FC = () => {
    const navigate = useNavigate();

    const handleArtworkClick = (artworkId: number) => {
        navigate(`/artwork/${artworkId}`);
    };

    return (

        <div className="min-h-screen bg-gray-100">
            {/* <header className="text-center py-10 px-5 bg-white shadow-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-5">赵无极画廊</h1>
                <p className="text-gray-600">展现东西方艺术的完美融合</p>
            </header> */}
            <Header></Header>
            
            <div className="text-center -mt-111">
                <h1 className="text-4xl font-bold text-gray-800 mb-5">探索艺术，发现非常</h1>

            </div>

            <main className="max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                
                {artworks.map((artwork) => (
                    <div
                        key={artwork.id}
                        onClick={() => handleArtworkClick(artwork.id)}
                        className="cursor-pointer transform transition-transform hover:scale-105"
                    >
                        <ArtworkCard artwork={artwork} />
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Gallery;