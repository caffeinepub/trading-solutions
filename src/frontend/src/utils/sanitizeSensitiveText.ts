/**
 * Utility to detect and redact sensitive information from text.
 * This serves as a safety net to prevent accidental display of:
 * - Bank account details (account numbers, IFSC, IBAN, routing numbers)
 * - The specific string "93260"
 */

const SENSITIVE_PATTERNS = [
  // Bank account number patterns (various formats)
  /\b\d{9,18}\b/g, // Generic account numbers
  /\b[A-Z]{4}0[A-Z0-9]{6}\b/g, // IFSC codes
  /\b[A-Z]{2}\d{2}[A-Z0-9]{1,30}\b/g, // IBAN format
  /\b\d{9}\b/g, // Routing numbers
  
  // Specific number to remove
  /93260/g,
];

const BANK_KEYWORDS = [
  'account number',
  'routing number',
  'ifsc',
  'iban',
  'swift',
  'bank account',
];

/**
 * Sanitizes text by redacting sensitive patterns
 */
export function sanitizeSensitiveText(text: string): string {
  if (!text) return text;
  
  let sanitized = text;
  
  // Replace sensitive patterns with redacted placeholder
  SENSITIVE_PATTERNS.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '[REDACTED]');
  });
  
  return sanitized;
}

/**
 * Checks if text contains potentially sensitive information
 */
export function containsSensitiveInfo(text: string): boolean {
  if (!text) return false;
  
  const lowerText = text.toLowerCase();
  
  // Check for bank-related keywords
  if (BANK_KEYWORDS.some(keyword => lowerText.includes(keyword))) {
    return true;
  }
  
  // Check for sensitive patterns
  return SENSITIVE_PATTERNS.some(pattern => pattern.test(text));
}

/**
 * Validates that text is safe to display
 */
export function validateSafeText(text: string): { safe: boolean; reason?: string } {
  if (!text) return { safe: true };
  
  if (text.includes('93260')) {
    return { safe: false, reason: 'Contains restricted number' };
  }
  
  if (containsSensitiveInfo(text)) {
    return { safe: false, reason: 'Contains potentially sensitive information' };
  }
  
  return { safe: true };
}
