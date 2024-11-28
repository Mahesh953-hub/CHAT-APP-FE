import { formatRelative } from 'date-fns';

export const formatMessageDate = (timestamp: string): string => {
  return formatRelative(new Date(timestamp), new Date());
};
