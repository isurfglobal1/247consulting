import { companyInfo } from '../../utils';

// Injected at build time by Vite from .env — works on static hosting since
// there is no runtime server involved, only a compiled mailto: link.
const DEFAULT_TO = import.meta.env.VITE_CONTACT_EMAIL || companyInfo.email;

export type MailtoFields = Record<string, string | undefined | null>;

const RULE = '─'.repeat(34);
const RULE_HEAVY = '━'.repeat(34);

function formatFields(fields: MailtoFields): string {
	const entries = Object.entries(fields).filter((entry): entry is [string, string] => !!entry[1] && entry[1].trim().length > 0);
	const labelWidth = entries.reduce((max, [label]) => Math.max(max, label.length), 0);

	return entries
		.map(([label, value]) => {
			if (value.includes('\n') || value.length > 48) {
				return `▸ ${label}\n    ${value.replace(/\n/g, '\n    ')}`;
			}
			return `▸ ${label.padEnd(labelWidth)}   ${value}`;
		})
		.join('\n');
}

// Plain-text "digital signature" — mailto: bodies can't carry real images,
// so the 247HR branding is expressed as a formatted text block instead.
function signatureBlock(): string {
	return [RULE, '  247HR CONSULTING', '  Enterprise BPO & Workforce Solutions · Ethiopia'].join('\n');
}

/**
 * Formats the given fields into a branded mailto: link and hands off to the
 * user's native mail client. No backend/server needed.
 */
export function sendAsEmail(title: string, fields: MailtoFields, to: string = DEFAULT_TO) {
	const submittedAt = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });

	const body = [RULE_HEAVY, `  ${title.toUpperCase()}`, RULE_HEAVY, '', formatFields(fields), '', `Submitted ${submittedAt} via 247hr.com`, '', signatureBlock()].join(
		'\n'
	);

	const url = `mailto:${to}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
	window.location.href = url;
}

/** Reads a <form>'s named fields into a plain object via FormData. */
export function formToFields(form: HTMLFormElement, labels: Record<string, string>): MailtoFields {
	const data = new FormData(form);
	const fields: MailtoFields = {};
	for (const [name, label] of Object.entries(labels)) {
		const value = data.get(name);
		if (typeof value === 'string') fields[label] = value;
	}
	return fields;
}
