import { useState } from 'react';
import { Link } from 'react-router-dom';
import { taxonomyTree } from '../data/plants';
import { ChevronRight, ChevronDown, ExternalLink } from 'lucide-react';

function TreeNode({ node, depth = 0 }) {
  const [expanded, setExpanded] = useState(depth < 2);

  if (node.isLeaf) {
    return (
      <div className="flex items-center gap-2 py-1.5 pl-2 group" style={{ marginLeft: depth * 16 }}>
        <span className="w-3 h-px inline-block" style={{ background: 'rgba(45,32,16,0.2)' }} />
        <Link
          to={`/plant/${node.id}`}
          className="font-serif italic text-sm hover:text-moss-600 text-ink-800 transition-colors flex items-center gap-1.5"
        >
          {node.name}
          <ExternalLink size={10} className="opacity-0 group-hover:opacity-40 transition-opacity" />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(v => !v)}
        className="flex items-center gap-1.5 py-1.5 w-full text-left group hover:text-ink-900 transition-colors"
        style={{ marginLeft: depth * 16, paddingLeft: depth > 0 ? 2 : 0 }}
      >
        <span className="text-ink-700/40 transition-transform" style={{ transform: expanded ? 'none' : undefined }}>
          {expanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
        </span>
        <span className={`text-sm font-sans ${depth === 0 ? 'font-semibold text-ink-900' : depth <= 2 ? 'font-medium text-ink-800' : 'text-ink-700 opacity-75'}`}>
          {node.name}
        </span>
        {node.children && (
          <span className="text-[10px] font-sans text-ink-700/30 ml-1">
            ({node.children.length})
          </span>
        )}
      </button>

      {expanded && node.children && (
        <div
          className="relative"
          style={{ borderLeft: depth < 3 ? '1px solid rgba(45,32,16,0.1)' : 'none', marginLeft: depth * 16 + 6 }}
        >
          {node.children.map((child, i) => (
            <TreeNode key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TaxonomyTree({ compact = false }) {
  return (
    <div className={compact ? '' : 'scientific-card p-5'}>
      {!compact && (
        <div className="grimoire-section-title mb-4">Taxonomic Hierarchy</div>
      )}
      <TreeNode node={taxonomyTree} depth={0} />
    </div>
  );
}
