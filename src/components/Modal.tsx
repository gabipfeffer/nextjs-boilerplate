"use client";
import React from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  bodyClassName: string;
  backgroundClassName: string;
  isOpen: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  bodyClassName,
  backgroundClassName,
  children,
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <div
          id={"modal-background"}
          onClick={onClose}
          className={backgroundClassName}
        >
          <div
            id={"modal-body"}
            className={bodyClassName}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
