import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, UserIcon, DotsCircleHorizontalIcon } from '@heroicons/react/solid'

function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 ml-24">
                <Image src="https://rb.gy/ogau5a" width={30} height={30} />
                <div className="space-y-2.5 my-4 mb-2.5 xl:ml-24">
                    <SidebarLink text="Home" Icon={HomeIcon} active />
                    <SidebarLink text="Explore" Icon={HashtagIcon} active />
                    <SidebarLink text="Notifications" Icon={BellIcon} active />
                    <SidebarLink text="Messages" Icon={InboxIcon} active />
                    <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active />
                    <SidebarLink text="Lists" Icon={ClipboardListIcon} active />
                    <SidebarLink text="Profile" Icon={UserIcon} active />
                    <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} active />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
