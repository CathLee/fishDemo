import React from 'react';
import { ArtPiece } from '../../types/types';

interface Props {
    artwork: ArtPiece;
}

const ArtworkCard: React.FC<Props> = ({ artwork }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{artwork.title}</h2>
                <p className="text-white/90">{artwork.year}</p>
            </div>
        </div>
    );
};

export default ArtworkCard; 