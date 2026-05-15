"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { authClient } from "../../lib/auth-client";

const UpdateUserModal = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    // console.log({ name, image });

    await authClient.updateUser({
      name,
      image,
    });
  };
  return (
    <div>
      <Modal>
        <Button variant="secondary">Update Profile</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Profile</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below and we'll get back to you. The modal
                  adapts automatically when the keyboard appears on mobile.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full">
                      <Label>Name</Label>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </TextField>
                    <TextField className="w-full">
                      <Label>Image Url</Label>
                      <Input
                        name="image"
                        type="url"
                        placeholder="Enter your Image Url"
                      />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Save
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;
