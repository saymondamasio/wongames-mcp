const isVerbose = process.argv.includes("--verbose") || process.argv.includes("-v");

export function vlog(...args: any[]) {
  if (isVerbose) console.log(...args);
}
