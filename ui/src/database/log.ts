export interface LogEntry {
  source: string;
  operation: "created" | "deleted";
  data?: string;
  commitHash: string;
  previousHash: string;
  commitMessage: string;
  author: string;
  timestamp: string;
  branch: string;
}

export async function process(logEntryJSON: string) {
  const logEntry = JSON.parse(logEntryJSON);
}