import { Link } from 'react-router-dom';
import { useGrimoire } from '../context/GrimoireContext';
import { MapPin, Beaker, Leaf } from 'lucide-react';

const heroColorMap = {
  moss: { bg: 'rgba(74,99,65,0.08)', border: 'rgba(74,99,65,0.25)', accent: '#4a6341', dot: 'bg-moss-500' },
  umber: { bg: 'rgba(125,92,55,0.08)', border: 'rgba(125,92,55,0.25)', accent: '#7d5c37', dot: 'bg-umber-500' },
  crimson: { bg: 'rgba(158,61,61,0.08)', border: 'rgba(158,61,61,0.25)', accent: '#9e3d3d', dot: 'bg-crimson-500' },
};

export default function PlantCard({ plant, index = 0 }) {
  const { readingMode } = useGrimoire();
  const colors = heroColorMap[plant.heroColor] || heroColorMap.moss;
  const isGrimoire = readingMode === 'grimoire';

  return (
    <Link
      to={`/plant/${plant.slug}`}
      className={`block ${isGrimoire ? 'grimoire-card' : 'scientific-card'} overflow-hidden animate-fade-in-up`}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}
    >
      {/* Color header stripe */}
      <div
        className="h-1.5"
        style={{ background: colors.accent, opacity: 0.7 }}
      />

      <div className="p-5">
        {/* Classification status badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            {isGrimoire ? (
              <div className="text-[9px] tracking-[0.18em] uppercase font-sans mb-1" style={{ color: colors.accent, opacity: 0.8 }}>
                {plant.grimoireClassification.archetypeSignature}
              </div>
            ) : (
              <div className="text-[10px] tracking-[0.1em] uppercase font-sans font-medium mb-1" style={{ color: 'rgba(45,32,16,0.4)' }}>
                {plant.taxonomy.family}
              </div>
            )}
            <h2 className={`leading-tight ${isGrimoire ? 'font-display text-lg' : 'font-sans font-semibold text-base text-ink-900'}`}>
              {isGrimoire ? (
                <em className="font-display not-italic">{plant.taxonomy.genus} {plant.taxonomy.species.split(' ')[1]}</em>
              ) : plant.commonName}
            </h2>
            <div className={`mt-0.5 ${isGrimoire ? 'font-serif text-sm italic text-ink-700 opacity-70' : 'font-sans text-xs text-ink-700 opacity-55'}`}>
              {isGrimoire ? plant.commonName : `${plant.taxonomy.genus} ${plant.taxonomy.species.split(' ')[1]}`}
            </div>
          </div>

          {/* Ontological status dot */}
          <div
            className="w-2 h-2 rounded-full mt-1.5 shrink-0"
            style={{ background: colors.accent, opacity: 0.6 }}
            title={plant.grimoireClassification.ontologicalStatus}
          />
        </div>

        {/* Short description */}
        <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${isGrimoire ? 'font-serif text-ink-700 italic' : 'font-sans text-ink-700 opacity-70'}`}>
          {isGrimoire
            ? plant.grimoireClassification.ontologicalStatus
            : plant.botanicalDescription.habit}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {plant.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Bottom meta row */}
        <div
          className="flex items-center gap-3 pt-3 text-[10px] font-sans"
          style={{ borderTop: '1px solid rgba(45,32,16,0.08)', color: 'rgba(45,32,16,0.45)' }}
        >
          <span className="flex items-center gap-1">
            <MapPin size={9} />
            {plant.ecology.nativeRange.split(',')[0].trim()}
          </span>
          <span className="flex items-center gap-1">
            <Leaf size={9} />
            {plant.taxonomy.family}
          </span>
          {!isGrimoire && (
            <span className="flex items-center gap-1 ml-auto font-medium" style={{ color: colors.accent }}>
              View entry →
            </span>
          )}
          {isGrimoire && (
            <span className="flex items-center gap-1 ml-auto font-serif italic" style={{ color: colors.accent, opacity: 0.8 }}>
              {plant.grimoireClassification.primaryTheme}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
