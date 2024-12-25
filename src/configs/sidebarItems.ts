import { HomeIcon } from '@heroicons/react/16/solid';
import { ClipboardDocumentIcon } from '@heroicons/react/16/solid';
import { UserIcon } from '@heroicons/react/16/solid';
import { EnvelopeIcon } from '@heroicons/react/16/solid';
import { CogIcon } from '@heroicons/react/16/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid';

interface SidebarItem {
    label: string;
    path: string;
    icon: React.ElementType;
}

const sidebarItems: SidebarItem[] = [
    {
        label: 'ホームページ',
        path: '/homepage',
        icon: HomeIcon
    },
    {
        label: 'アンケート',
        path: '/survey',
        icon: ClipboardDocumentIcon
    },
    {
        label: 'プロフィール',
        path: '/profile',
        icon: UserIcon
    },
    {
        label: 'お問い合わせ',
        path: '/contact',
        icon: EnvelopeIcon
    },
    {
        label: '設定',
        path: '/settings',
        icon: CogIcon
    },
    {
        label: 'ヘルプ & FAQ',
        path: '/help',
        icon: QuestionMarkCircleIcon
    }
];

export default sidebarItems;
