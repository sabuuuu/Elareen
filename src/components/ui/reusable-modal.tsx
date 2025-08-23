import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';

// Hook to detect mobile screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

// Responsive Modal Component
const ResponsiveModal = ({ isOpen, onClose, title, description, children }: ResponsiveModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="bg-[#121c16] border-[#1e2a22]">
          <DrawerHeader>
            <DrawerTitle className="text-[#d3e6dc]">{title}</DrawerTitle>
            {description && (
              <DrawerDescription className="text-[#d3e6dc]/70">
                {description}
              </DrawerDescription>
            )}
          </DrawerHeader>
          <div className="p-4 pb-8">
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#121c16] border-[#1e2a22] text-[#d3e6dc] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#d3e6dc]">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-[#d3e6dc]/70">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ResponsiveModal;