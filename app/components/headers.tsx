"use client"

import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./ui/language-switcher";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="flex items-center space-x-4 justify-end mt-4 mr-4">
            <LanguageSwitcher />
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <div className="md:hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>
        </div>
    )
}