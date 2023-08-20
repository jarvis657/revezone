import { atom } from 'jotai';
import { RevezoneFile, RevezoneFolder, FileTree } from '@renderer/types/file';
import { TabItem } from '@renderer/types/tabs';
import { DEFAULT_TAB_LIST } from '@renderer/utils/constant';

type Theme = 'light' | 'dark';

export const fileTreeAtom = atom<FileTree>({});

export const currentFileAtom = atom<RevezoneFile | undefined | null>(undefined);

export const workspaceLoadedAtom = atom(false);

export const folderListAtom = atom<RevezoneFolder[]>([]);

export const currentFolderIdAtom = atom<string | undefined>(undefined);

export const siderbarCollapsedAtom = atom(false);

export const langCodeAtom = atom('en');

export const themeAtom = atom<Theme>('light');

export const tabListAtom = atom<TabItem[]>(DEFAULT_TAB_LIST);

export const tabIndexAtom = atom<number>(0);
