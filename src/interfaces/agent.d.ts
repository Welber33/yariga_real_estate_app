import { BaseKey } from '@pankod/refine-core';

export interface AgentCardProps {
    id?: BaseKey | undefined,
    name: string,
    email: string,
    avatar: string,
    noOfProperties: number
}

export interface InfoBarProps {
    icon: ReactNode,
    name: string
}
