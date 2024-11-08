import { formatDistance as fnsFormatDistance, formatDuration as fnsDuration } from 'date-fns';

export const formatDuration = (ms: number): string => {
    return fnsDuration({
        hours: Math.floor(ms / (1000 * 60 * 60)),
        minutes: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((ms % (1000 * 60)) / 1000)
    });
};

export const formatDistance = (date: Date | number): string => {
    return fnsFormatDistance(new Date(date), new Date(), { addSuffix: true });
}; 