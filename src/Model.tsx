import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faPencil,
  faEye,
  faTrash,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

interface User {
  id?: number;
  name: string;
  age: number;
  salary: number;
  mobile: string;
}

const Model = () => {
  const [data, setData] = useState([
    { id: 1, name: "Isha", age: 23, salary: 50000, mobile: "6356962811" },
    { id: 2, name: "cdcd", age: 25, salary: 45000, mobile: "2345678901" },
    { id: 3, name: "sdcec", age: 15, salary: 60000, mobile: "3456789012" },
    { id: 4, name: "dcndec", age: 28, salary: 55000, mobile: "4567890123" },
    { id: 5, name: "nxjshd", age: 20, salary: 70000, mobile: "5678901234" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [viewUser, setViewUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    age: "",
    salary: "",
    mobile: "",
  });
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrEditUser = (e) => {
    e.preventDefault();

    if (editUser !== null) {
      setData((prevData) =>
        prevData.map((user) =>
          user.id === editUser
            ? {
                ...user,
                ...form,
                age: Number(form.age),
                salary: Number(form.salary),
              }
            : user
        )
      );
    } else {
      const newId =
        data.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
      const newUser = {
        id: newId,
        ...form,
        age: Number(form.age),
        salary: Number(form.salary),
      };
      setData([...data, newUser]);
    }

    setForm({ name: "", age: "", salary: "", mobile: "" });
    setEditUser(null);
    setIsModalOpen(false);
    setSearch("");
  };

  const confirmDelete = (id: number) => {
    setDeleteUser(id);
  };

  const handleDelete = () => {
    if (deleteUser !== null) {
      setData((prevData) => prevData.filter((user) => user.id !== deleteUser));
      setDeleteUser(null);
    }
  };

  const handleEdit = (user: User) => {
    setForm({
      name: user.name,
      age: user.age.toString(),
      salary: user.salary.toString(),
      mobile: user.mobile,
    });
    setIsModalOpen(true);
    if (user && user.id) {
      setEditUser(user.id);
    }
  };

  const handleView = (user: User) => {
    setViewUser(user);
  };

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      const valA = a[key] || "";
      const valB = b[key] || "";

      const strA = String(valA).toLowerCase();
      const strB = String(valB).toLowerCase();

      if (strA < strB) {
        return direction === "ascending" ? -1 : 1;
      }
      if (strA > strB) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const filteredData = data.filter((user) => {
    const Name = user.name.toLowerCase().includes(search.toLowerCase());
    const Age = user.age.toString().includes(search);
    return Name || Age;
  });

  return (
    <div className="container mt-4">
      <div className="d-flex mb-3">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50 me-2"
        />
        <button
          onClick={() => {
            setIsModalOpen(true);
            setEditUser(null);
            setForm({ name: "", age: "", salary: "", mobile: "" });
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Name
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => handleSort("name")}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>
              Age
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => handleSort("age")}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>Salary</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
              <td>{user.mobile}</td>
              <td>
                <button
                  onClick={() => handleView(user)}
                  className="btn btn-info btn-sm me-2"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                  onClick={() => handleEdit(user)}
                  className="btn btn-warning btn-sm me-2"
                  disabled={viewUser !== null}
                >
                  <FontAwesomeIcon icon={faUserPen} />
                </button>
                <button
                  onClick={() => confirmDelete(user.id)}
                  className="btn btn-danger btn-sm"
                  disabled={viewUser !== null}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{editUser ? "Edit User" : "Add New User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddOrEditUser}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={form.age}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="btn btn-primary">
              {editUser ? "Update" : "Add"}
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {viewUser && (
        <Modal
          show={viewUser !== null}
          onHide={() => setViewUser(null)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>View User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Name:</strong> {viewUser.name}
            </p>
            <p>
              <strong>Age:</strong> {viewUser.age}
            </p>
            <p>
              <strong>Salary:</strong> {viewUser.salary}
            </p>
            <p>
              <strong>Mobile:</strong> {viewUser.mobile}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setViewUser(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {deleteUser !== null && (
        <Modal
          show={deleteUser !== null}
          onHide={() => setDeleteUser(null)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this user?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={() => setDeleteUser(null)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Model;
