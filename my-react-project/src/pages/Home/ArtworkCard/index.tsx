// components/ArtworkCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArtPiece } from '../../../types/types';

interface ArtworkCardProps {
    artwork: ArtPiece;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/artwork/${artwork.id}`);
    };

    return (
        <article 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={handleClick}
        >
            <div 
                className={`w-full h-[300px] ${artwork.gradientClass}`}
                role="img"
                aria-label={artwork.title}
            />
            <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {artwork.title}
                </h3>
                <p className="text-gray-600 text-sm">
                    {artwork.year}
                </p>
            </div>
        </article>
    );
};

export default ArtworkCard;