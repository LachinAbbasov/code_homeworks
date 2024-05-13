import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      posterImg: '',
      releaseYear: '',
      genre: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      posterImg: Yup.string().required('Required'),
      releaseYear: Yup.number().required('Required'),
      genre: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:5000/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('Movie added successfully');
          navigate('/sliders');
        } else {
          console.error('Failed to add movie');
        }
      } catch (error) {
        console.error('Error adding movie:', error);
      }
    },
  });

  return (
    <div className="add-container">
      {/* Formik form */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
        </div>
        <div>
          <label htmlFor="posterImg">Poster Image</label>
          <input
            id="posterImg"
            name="posterImg"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.posterImg}
          />
          {formik.touched.posterImg && formik.errors.posterImg ? <div>{formik.errors.posterImg}</div> : null}
        </div>
        <div>
          <label htmlFor="releaseYear">Release Year</label>
          <input
            id="releaseYear"
            name="releaseYear"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.releaseYear}
          />
          {formik.touched.releaseYear && formik.errors.releaseYear ? <div>{formik.errors.releaseYear}</div> : null}
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            name="genre"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.genre}
          />
          {formik.touched.genre && formik.errors.genre ? <div>{formik.errors.genre}</div> : null}
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default Add;
