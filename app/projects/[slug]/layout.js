import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectSort from "@/components/ProjectSort";
import { projects } from "@/public/_projects";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <Header />

      <main>
        <ProjectSort projects={projects} cat={`all`} />

        <section className="container">
          <ProjectGrid post={projects} cat={router.query.tag} />
        </section>
      </main>

      <Modal
        isOpen={!!router.query.slug}
        onRequestClose={() =>
          router.push(
            `/projects?tag=${router.query.tag ? router.query.tag : "all"}`,
          )
        }
        className="modal-container"
        overlayClassName="modal"
      >
        <ModalContents slug={router.query.slug} post={projects} />
      </Modal>
    </>
  );
}
