"use client";

import { Drawer } from "vaul";
import "./drawer.css"

export function DrowerTrigger({children}) {
    return (
        <Drawer.Trigger>
            {children}
        </Drawer.Trigger>
    )
}

export function Drower2({children}) {

    return (
        <Drawer.Root defaultOpen>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className=" flex flex-col rounded-[40px] mt-24 fixed bottom-0 top-10 left-10 right-10">
                    <div className="flex-1 student-card">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <Drawer.Trigger asChild>
                            <button className="close-button">
                                X
                            </button>
                        </Drawer.Trigger>
                        <div className="max-w-md mx-auto">
                            {children}
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}