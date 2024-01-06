import Header from "@/components/Header";
import ModalContents from "@/components/ModalContents";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectSort from "@/components/ProjectSort";
import { projects } from "@/public/_projects";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function Projects() {
  const router = useRouter();
  const [data, setdata] = useState(projects);
  const [cat, setCat] = useState("all");

  useEffect(() => {
    if (router.query.tag === "all") {
      setdata(projects);
    }
    // else {
    //   setCat(router.query.tag);
    //   setdata(projects.filter((p) => p.tags.includes(router.query.tag)));
    // }
  }, [router.query.tag]);

  return (
    <>
      <Head>
        <title>{"Grant Imbo — Projects"}</title>
      </Head>
      <Header fixed={true} hidemenu={false} />

      <main>
        <ProjectSort
          projects={projects}
          setdata={setdata}
          setCat={setCat}
          cat={cat}
        />

        <section className="container">
          <ProjectGrid post={data} cat={router.query.tag} />
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
        <ModalContents
          slug={router.query.slug}
          post={projects}
          cat={router.query.tag}
        />
      </Modal>
    </>
  );
}
