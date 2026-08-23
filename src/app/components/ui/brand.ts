// Shared brand overrides so shadcn primitives (Select, Popover, Calendar, ...)
// rhyme with the site's dark, glass-panel form fields instead of the default
// shadcn theme (which relies on --background/--foreground tokens this project
// doesn't define).
export const SHADCN_FIELD =
	'bg-white/5 border border-white/15 rounded-xl text-white text-sm font-light transition-all duration-300 hover:border-white/30 focus:border-primary-blue data-[state=open]:border-primary-blue';

export const SHADCN_POPUP = 'bg-[#0A0A0A] border border-white/10 text-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]';

export const SHADCN_ITEM = 'text-white/80 focus:bg-white/10 focus:text-white rounded-lg cursor-pointer';
